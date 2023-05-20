
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'

export default class Spring2 extends Component {
  state = {
    animation: new Animated.Value(1) 
  }

  startAnimation = () => {
    Animated
      .spring(this.state.animation, { 
        toValue: 30,  
        duration: 300,

      })
      .start()
  }

  render() {
    const animatedStyles = {
        bottom: this.state.animation,
        left: this.state.animation,
        right: this.state.animation,

    }

    return (
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[styles.myBox, animatedStyles]}>
              <Text>App</Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View >
      )
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  myBox: {
    height: 200,
    backgroundColor: '#FFC107',
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    left:0,
    right:0,
    bottom:0
  }
})