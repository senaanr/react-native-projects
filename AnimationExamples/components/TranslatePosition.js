
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'

export default class TranslatePosition extends Component {
    state ={
        animation: new Animated.Value(0)
    }

    startAnimation = () => {
        Animated
        .timing(this.state.animation, {
            toValue:300,
            duration:300
        })
        .start()
    }

  render() {
    const animatedStyles = {
        transform : [  //move from place to place
            {
                translateX :this.state.animation
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