import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React, { Component } from 'react'

import io from 'socket.io-client'

export default class App extends Component {
  state = {
    onlineCount: 0,
    color: '#f1f1f1'
  }

  componentDidMount() {
    this.io = io.connect('http://95.15.144.118:3000', {
      setTimeout: 1000
    })

    this.io.on('newUser', count => {
      this.setState({
        onlineCount
      })
    })

    this.io.on('disUser', count => {
      this.setState({
        onlineCount
      })
    })

    this.io.on('changeColor', color => {
      this.setState({
        color
      })
    })
  }

  generateColor = () => {
    return '#' + Math.random().toString(16).slice(2, 8)
  }

  changeColor = () => {
    let color = this.generateColor();

    this.setState({
      color
    });

    this.io.emit('changeColor', color)
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.color }]}>
        <TouchableHighlight
          onPress={this.changeColor}
          style={styles.button}>
          <React.Fragment>
            <Text style={styles.color}>{this.state.color}</Text>
            <View style={styles.countContainer}>
              <Text style={styles.count}>{this.state.onlineCount}</Text>
              <Text>Online</Text>
            </View>
          </React.Fragment>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countContainer: {
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 5
  },
  count: {
    fontSize: 33
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  color:{
    fontSize:28,
    padding:10
  }
})