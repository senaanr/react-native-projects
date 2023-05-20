import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class ContactDetail extends Component {
    static navigationOptions = ({navigation})  => {
        const user = navigation.getParam('user');

        return{
            title: `${user.name.first} ${user.name.last}`
        }
    }
  render() {
    return (
      <View>
        <Text>ContactDetail</Text>
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