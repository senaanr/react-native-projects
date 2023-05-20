
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback} from 'react-native'
import React, { Component } from 'react'

export default class InterpolationRotate extends Component {
  state = {
    animation: new Animated.Value(0) 
  }

  startAnimation = () => {
    Animated
      .timing(this.state.animation, { 
        toValue: 360,   
        duration: 1000
      })
      .start()
  }

  render() {
    const interpolation = this.state.animation.interpolate({
        inputRange: [0,360],
        outputRange:['0deg','-360deg']
    })

    const animatedStyles = {
        transform: [{
            rotate:interpolation
        }]
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