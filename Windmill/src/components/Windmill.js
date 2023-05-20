import { Animated, Easing, Image, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Windmill extends Component {
    state = {
        animation: new Animated.Value(0)
    }

    startAnimation = () => {
        Animated.loop(
            Animated
                .timing(this.state.animation, {
                    duration: 5000,
                    toValue: 1,
                    easing: Easing.linear
                })
        ).start()

    }

    render() {
        const interpolation = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        const animatedStyles = {
            transform: [{
                rotate: interpolation
            }]
        }

        return (
            <View style={[styles.container, {...this.props.style}]}>
                <Animated.Image
                    style={[styles.windmillSpinner, animatedStyles]}
                    source={require('../../assests/spinner.png')}
                    resizeMode="contain"
                >
                    <Image
                        style={styles.windmillBottom}
                        source={require('../../assests/windmill-bottom.png')}
                        resizeMode='contain'
                    />
                </Animated.Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    windmillSpinner: {
        width: 130,
        height: 140,
        position: 'absolute',
        left: 45,
        top: 90,
        zIndex: 2
    },
    windmillBottom: {
        width: 220,
        height: 220,
        position: 'absolute',
        top: 165,
        zIndex: 1
    }
})