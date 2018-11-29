import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    buttonContainer: {
      position: 'absolute',
      bottom: 24,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: 'rgb(46, 204, 113)',
      borderRadius: 24,
      padding: 15,
      paddingHorizontal: 48,
      margin: 24,
    },
    text: {
      ...Platform.select({
        android: {
          fontFamily: 'Roboto',
        },
        ios: {
          fontFamily: 'San Francisco',
        },
      }),
      fontSize: 14,
      color: 'white',
    },
})