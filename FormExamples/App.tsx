import React, { Component } from 'react'
import { Container} from 'native-base'
import { StyleSheet, View } from 'react-native'

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}  >

      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF'
  }
})