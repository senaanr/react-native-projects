import { Text, View , StyleSheet} from 'react-native'
import React, { Component } from 'react'

export default class DrawerMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>DrawerMenu</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      padding:50
    }
  })