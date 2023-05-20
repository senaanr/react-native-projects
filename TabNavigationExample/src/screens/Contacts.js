import { Text, View, Button } from 'react-native'
import React, { Component } from 'react'

import ContactsList from '../components/ContactsList'

export default class Contacts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ContactsList navigation = {this.props.navigation} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    }
  })