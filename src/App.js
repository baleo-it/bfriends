import React, { Component } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import CaptureScreen from './screens/CaptureScreen'
import AddContactScreen from './screens/AddContactScreen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(46, 204, 113)',
  },
})

class App extends Component {
  state = {
    touchPoints: null,
    imageUri: null,
  }

  updateTouchPoints = ({ touchPoints, imageUri }) => {
    this.setState({ touchPoints, imageUri })
  }

  resetApp = () => {
    this.setState({ touchPoints: null, imageUri: null })
  }

  render() {
    const { touchPoints, imageUri } = this.state

    return (
      <SafeAreaView style={styles.container}>
        { touchPoints && imageUri ? (
          <AddContactScreen
            onViewPress={this.resetApp}
            touchPoints={touchPoints}
            uri={imageUri}
          />
        ) : (
          <CaptureScreen updateTouchPoints={this.updateTouchPoints} />
        )}
      </SafeAreaView>
    )
  }
}

export default App
