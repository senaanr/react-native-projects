import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class SettingsModal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings Model</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#F44336'
    },
    text:{
        color:'#f1f1f1',
        fontSize: 32
    }
  })