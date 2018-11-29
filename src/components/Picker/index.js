import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text } from 'react-native'

import styles from './styles'

const Picker = ({ labels, data, onLabelSelect, title }) => (
  <View style={styles.pickerWrapper}>
    <Text style={styles.pickerTitle}>{title}</Text>
    {Object.values(labels).map(label => (
      <TouchableOpacity
        key={label.value}
        onPress={() => onLabelSelect(label.value, data.text)}
        style={styles.itemContainer}
      >
        <Text style={styles.itemText}>{label.label}</Text>
      </TouchableOpacity>
    ))}
  </View>
)

Picker.propTypes = {
  labels: PropTypes.objectOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      isRequired: PropTypes.bool,
    })
  ).isRequired,
  data: PropTypes.object, // eslint-disable-line
  onLabelSelect: PropTypes.func.isRequired,
  title: PropTypes.string,
}

Picker.defaultProps = {
  title: 'Choisir le type',
  data: {},
}

export default Picker
