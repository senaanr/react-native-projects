
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback} from 'react-native'
import React, { Component } from 'react'

export default class Interpolation extends Component {
    state={
        animation: new Animated.Value(0)
    }

    startAnimation = () => {
        Animated
        .timing(this.state.animation,{
            duration:1000,
            toValue:1
        })
        .start()
    }

  render() {
    const boxInterpolate = this.state.animation.interpolate({
        inputRange:[0,1],
        outputRange: ['red','black']
    })

    const textInterpolate = this.state.animation.interpolate({
        inputRange:[0,1],
        outputRange: ['red','white']
    })

    const boxAnimatedStyles ={
        backgroundColor: boxInterpolate
    }

    const textAnimatedStyles = {
        color: textInterpolate
    }

    return (
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[styles.myBox, boxAnimatedStyles]}>
              <Animated.Text style={textAnimatedStyles}>App</Animated.Text>
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