import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'react-native'
import { RNCamera } from 'react-native-camera'
import RNTextDetector from 'react-native-text-detector'

import ActionButton from '../../components/ActionButton'
import NotAuthorizedView from './NotAuthorizedView'
import screenDimensions from '../../libs/dimensions'

import { screenStyles } from './styles'

const PICTURE_OPTIONS = {
  fixOrientation: true,
  forceUpOrientation: true,
}

class CaptureScreen extends Component {
  static propTypes = {
    updateTouchPoints: PropTypes.func.isRequired,
  }

  state = {
    isProcessing: false,
    isReady: false,
  }

  takePicture = async () => {
    this.setState({ isProcessing: true })

    if (this.camera) {
      const data = await this.camera.takePictureAsync(PICTURE_OPTIONS)
      this.detectText(data)
    } else {
      this.setState({ isProcessing: false })
    }
  }

  detectText = async img => {
    const results = await RNTextDetector.detectFromUri(img.uri)
    this.setState({ isProcessing: false })

    if (!(results && results.length)) {
      Alert.alert(
        'Aucun résultat',
        `Nous n'avons pas pu extraire les informations. Veuillez réessayer ou utiliser une carte de visite lisible.`,
        [{ text: 'OK', onPress: () => {} }],
        { cancelable: false }
      )
    } else {
      this.createTouchPoints(results, img)
    }
  }

  createTouchPoints = (result, img) => {
    const { updateTouchPoints } = this.props

    const HEIGHT_RATIO = screenDimensions.height / img.height
    const WIDTH_RATIO = screenDimensions.width / img.width

    const touchPoints = []

    result.forEach(item => {
      item.lines.forEach(box =>
        touchPoints.push({
          text: box.text,
          position: {
            width: box.bounding.width * WIDTH_RATIO,
            left: box.bounding.left * WIDTH_RATIO,
            height: box.bounding.height * HEIGHT_RATIO,
            top: box.bounding.top * HEIGHT_RATIO,
          },
        })
      )
    })

    updateTouchPoints({ touchPoints, imageUri: img.uri })
  }

  render() {
    const { isProcessing, isReady } = this.state

    return (
      <>
        <RNCamera
          ref={ref => {
            this.camera = ref
          }}
          style={screenStyles.preview}
          type={RNCamera.Constants.Type.back}
          playSoundOnCapture
          flashMode={RNCamera.Constants.FlashMode.off}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          whiteBalance={RNCamera.Constants.WhiteBalance.auto}
          captureAudio={false}
          permissionDialogTitle="Bfriends utilise la caméra"
          permissionDialogMessage="Nous avons besoin de votre permission pour utiliser la caméra de votre téléphone."
          notAuthorizedView={<NotAuthorizedView />}
          pendingAuthorizationView={null}
          onCameraReady={() => this.setState({ isReady: true })}
        />
        {isReady && (
          <ActionButton
            onPress={this.takePicture}
            text={isProcessing ? 'Analyse en cours...' : 'Be friends!'}
          />
        )}
      </>
    )
  }
}

export default CaptureScreen
