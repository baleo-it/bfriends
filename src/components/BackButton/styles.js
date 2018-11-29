import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    button: {
        margin: 24,
        flexDirection: 'row',
        alignItems: 'center',
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
        fontSize: 18,
        fontWeight: '100',
        color: '#fff',
        elevation: 5,
    },
})
