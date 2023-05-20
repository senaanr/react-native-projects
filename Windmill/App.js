import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

import Windmill from './src/components/Windmill'
import Motor from './src/components/Motor'
import FlowersAndWay from './src/components/FlowersAndWay'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Windmill
          style={{ left: 150, top: 75 }}
        />
        <Windmill
          style={{ left: -40, top: 63 }}
        />
        <Motor 
        style={{top:290}}
        />
        <FlowersAndWay />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94BBA9',
  }
})