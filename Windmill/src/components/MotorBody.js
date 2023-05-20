import { Animated, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class MotorBody extends Component {
  state = {
    animation: new Animated.Value(0)
  }

  componentDidMount() {
    this.startAnimation()
  }

  startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated
          .timing(this.state.animation, {
            duration: 400,
            toValue: 3
          }),
        Animated
          .timing(this.state.animation, {
            duration: 500,
            toValue: 0
          })
      ])
    )
  }

  render() {
    const animatedStyles = {
      top: this.state.animation
    }

    return (
      <View>
        <Animated.Image
          resizeMode={"contain"}
          source={require('../../assests/car.png')}
          style={[styles.CarBody, animatedStyles]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  CarBody: {
    width: 200,
    height: 200,
    position: 'absolute',
    left: 0,
    top: 0
  }
})