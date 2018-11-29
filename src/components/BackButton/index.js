import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View,} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'

const BackButton = ({ onPress, text }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {text ? (
        <Text style={styles.text}>{text}</Text>
      ) : (
        <Icon name="chevron-left" size={28} color="#FFF" />
      )}
    </TouchableOpacity>
  </View>
)

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string,
}

BackButton.defaultProps = {
  text: null,
}

export default BackButton
