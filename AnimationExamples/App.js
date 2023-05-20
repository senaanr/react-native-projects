import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import Timing from './components/Timing'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Timing />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  }
})