import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View,} from 'react-native'

import styles from './styles'

const ActionButton = ({ onPress, text }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  </View>
)

ActionButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default ActionButton
