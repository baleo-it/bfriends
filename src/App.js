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
  render() {
    return (
      <SafeAreaView style={styles.container}>
          <CaptureScreen />
      </SafeAreaView>
    )
  }
}

export default App
