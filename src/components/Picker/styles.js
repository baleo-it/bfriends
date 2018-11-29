import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    pickerWrapper: {
      alignSelf: 'stretch',
    },
    pickerTitle: {
      fontSize: 20,
      fontWeight: '100',
      marginBottom: 12,
      alignSelf: 'center',
      color: 'cornflowerblue',
    },
    itemContainer: {
      paddingVertical: 10,
    },
    itemText: {
      ...Platform.select({
        android: {
          fontFamily: 'Roboto',
        },
        ios: {
          fontFamily: 'San Francisco',
        },
      }),
      fontSize: 18,
      fontWeight: '400',
    },
})
