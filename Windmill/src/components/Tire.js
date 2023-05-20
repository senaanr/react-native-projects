import { Animated, Easing, Image, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Tire extends Component {
    state = {
        animation: new Animated.Value(0)
    }

    startAnimation = () => {
        Animated.loop(
            Animated
                .timing(this.state.animation, {
                    duration: 1000,
                    toValue: 1,
                    easing: Easing.linear
                })
        ).start()

    }

    render() {
        const interpolation = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-360deg']
        })

        const animatedStyles = {
            transform: [{
                rotate: interpolation
            }]
        }

        return (
                <Animated.Image
                    style={[styles.tire, animatedStyles]}
                    source={require('../../assests/tire.png')}
                    resizeMode="contain"
                />
        )
    }
}

const styles = StyleSheet.create({
    tire:{
        width:50,
        height:50
    }
})