import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, View } from 'react-native'
import Modal from 'react-native-modal'

const { width, height } = Dimensions.get('window')

import styles from './styles'

const NativeModal = ({ children, isVisible, dismissModal }) => (
  <Modal
    isVisible={isVisible}
    deviceHeight={height}
    deviceWidth={width}
    onBackButtonPress={() => dismissModal()}
    onBackdropPress={() => dismissModal()}
    animationIn="slideInUp"
    animationOut="slideOutDown"
    hideModalContentWhileAnimating
    useNativeDriver
  >
    <View style={styles.innerModal}>{children}</View>
  </Modal>
)

NativeModal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  isVisible: PropTypes.bool.isRequired,
  dismissModal: PropTypes.func.isRequired,
}

export default NativeModal
