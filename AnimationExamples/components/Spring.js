
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'

export default class Spring extends Component {
  state = {
    animation: new Animated.Value(1) 
  }

  startAnimation = () => {
    Animated
      .spring(this.state.animation, { 
        toValue: 2,  
        duration: 200,

      })
      .start()
  }

  render() {
    const animatedStyles = {
      transform: [
        {
            scale: this.state.animation
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