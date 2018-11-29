import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(46, 204, 113)',
  },
})

class App extends Component {
  render() {
    return <SafeAreaView style={styles.container}>
      <Text>Custom App.js</Text>
    </SafeAreaView>
  }
}

export default App
