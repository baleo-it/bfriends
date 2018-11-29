import { Dimensions, Platform } from 'react-native'

const { height, width } = Dimensions.get('window')

const screenHeight = Platform.select({
  ios: height,
  android: Platform.Version < 21 ? height - 25 : height,
})

const statusBarHeight = Platform.select({
  ios: 22,
  android: Platform.Version >= 21 ? 25 : 0,
})

const headerHeight = statusBarHeight + 55

const screenDimensions = {
  width,
  height: screenHeight,
}

export default screenDimensions

export { statusBarHeight, headerHeight }
