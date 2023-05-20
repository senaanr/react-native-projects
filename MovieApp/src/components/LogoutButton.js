import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import {inject} from 'mobx-react'

@inject('AuthStore')
export default class LogoutButton extends Component {
  render() {
    return (
      <TouchableOpacity 
      onPress={() => this.props.AuthStore.removeToken()}
      style={{padding:10}}>
        <Text style={{fontSize:14}}>Logout</Text>
      </TouchableOpacity>
    )
  }
}