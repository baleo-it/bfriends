import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View } from 'react-native'

import styles from './styles'

const TouchPoint = ({ data, onPress }) => (
  <TouchableOpacity
    style={[styles.touchPointContainer, data.position]}
    onPress={() => onPress(data.text)}
  >
    <View style={styles.touchPoint} />
  </TouchableOpacity>
)

TouchPoint.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line
  onPress: PropTypes.func.isRequired,
}

export default TouchPoint
