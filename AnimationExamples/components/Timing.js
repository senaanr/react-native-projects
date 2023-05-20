
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback, Alert, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Timing extends Component {
  state = {
    animation: new Animated.Value(1) //initial value
  }

  startAnimation = () => {
    Animated
      .timing(this.state.animation, { // timing creates loop
        toValue: .2,  //last value
        duration: 1000
      })
      .start(() => {   
        Animated   //callback function
        .timing(this.state.animation, {
          toValue:1,
          duration:100
        })
        .start()
      })
  }

  render() {
    const animatedStyle = {
      opacity: this.state.animation
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={this.startAnimation}
        >
          <Animated.View
            style={[styles.myBox, animatedStyle]}
          >
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
    width: 200,
    height: 200,
    backgroundColor: '#FFC107',
    justifyContent: 'center',
    alignItems: 'center'
  }
})