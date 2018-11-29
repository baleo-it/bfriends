import React, { Component } from 'react'
import { RNCamera } from 'react-native-camera'

import NotAuthorizedView from './NotAuthorizedView'

import { screenStyles } from './styles'

class CaptureScreen extends Component {
  render() {
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
          onCameraReady={() => {}}
        />
      </>
    )
  }
}

export default CaptureScreen
