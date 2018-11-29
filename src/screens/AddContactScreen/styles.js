import { StyleSheet, Platform } from 'react-native'

import screenDimensions from '../../libs/dimensions'

export default StyleSheet.create({
    imageBackground: {
      flex: 1,
      backgroundColor: 'black',
    },
    image: {
      width: screenDimensions.width,
      height: screenDimensions.height,
    },
})
  