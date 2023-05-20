import { View, Text, StyleSheet } from 'react-native'
import React, { Component } from 'react'

import { Provider } from 'mobx-react'

import Counter from './src/components/Counter'
import Person from './src/components/Person'
import store from './src/store'
import Users from './src/components/Users'


export default class App extends Component {
  render() {

    return (
      <Provider {...store}>
        <View style={styles.container}>
          <Users />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})