import { View, Text, StyleSheet } from 'react-native'
import React, { Component } from 'react'

import Router from './src/Router'
import NavigationService from './src/NavigationService'

import { Provider } from 'mobx-react'
import store from './src/store'

export default class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <Router
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    )
  }
}
