import { Text, View } from 'react-native'
import React, { Component } from 'react'
import CameraView from './android/components/CameraView'

export default class App extends Component {
  render() {
    return (
      <CameraView />
    )
  }
}