
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback , Easing, Dimensions} from 'react-native'
import React, { Component } from 'react'

export default class EasingExample extends Component {
  state = {
    animation: new Animated.Value(1)  
  }

  startAnimation = () => {
    Animated
      .timing(this.state.animation, { 
        toValue: Dimensions.get('window').width - 200, 
        duration: 1000,
        //easing:Easing.bounce
        easing:Easing.back(4)
        //easing:Easing.elastic(20)

      })
      .start(() => {
        Animated
      .timing(this.state.animation, { 
        toValue: 0, 
        duration: 1000,
        easing:Easing.bounce

      })
      .start(() => {
        this.startAnimation()
      })

      })
  }

  render() {
    const animatedStyles = {
      transform: [
        {
            translateX: this.state.animation
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