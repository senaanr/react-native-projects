
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'

export default class Parallel extends Component {
    state = {
        animationScale: new Animated.Value(1),
        animationOpacity: new Animated.Value(0.4)
    }

    startAnimation = () => {
        Animated.parallel([
            Animated
                .timing(this.state.animationScale, {
                    toValue: 1.3,
                    duration: 120
                }),

            Animated
                .timing(this.state.animationOpacity, {
                    toValue: 1,
                    duration: 500
                })
        ]) .start()
    }

    render() {
        const animatedStyles = {
            transform: [
                {
                    scale: this.state.animationScale
                }
            ],
            opacity: this.state.animationOpacity
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