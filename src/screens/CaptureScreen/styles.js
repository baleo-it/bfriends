import { StyleSheet, Platform } from 'react-native'

export const screenStyles = StyleSheet.create({
    preview: {
      flex: 1,
    },
})

export const notAuthorizedViewStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(192, 57, 43)',
      paddingHorizontal: 24,
    },
    title: {
      ...Platform.select({
        android: {
          fontFamily: 'Roboto',
        },
        ios: {
          fontFamily: 'San Francisco',
        },
      }),
      fontSize: 24,
      fontWeight: '700',
      color: 'white',
      textAlign: 'center',
      marginBottom: 24,
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
      fontSize: 16,
      fontWeight: '400',
      color: 'white',
      textAlign: 'center',
    },
})
