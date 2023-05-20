
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'

export default class Scale extends Component {
  state = {
    animation: new Animated.Value(1)  // 1:without scale, default value
  }

  startAnimation = () => {
    Animated
      .timing(this.state.animation, { 
        toValue: -1,   // -: reversing
        duration: 500
      })
      .start()
  }

  render() {
    const animatedStyles = {
      transform: [
        {
            scaleX: this.state.animation
        }
      ]
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
    width: 200,
    height: 200,
    backgroundColor: '#FFC107',
    justifyContent: 'center',
    alignItems: 'center'
  }
})