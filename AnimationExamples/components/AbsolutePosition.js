import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback, Alert, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class AbsolutePosition extends Component {
    state = {
        animation : new Animated.Value(0)
    }

    startAnimation = () => {
        Animated
        .timing(this.state.animation, {
            duration:500,
            toValue:50
        })
        .start()
    }

    render() {
        const animatedStyles = {
            //top: this.state.animation , //400px scroll from above
            left:this.state.animation,
            right:this.state.animation,
            bottom:this.state.animation

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
        height:200,
        backgroundColor: '#FFC107',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        bottom:0,
        left:0,
        right:0
    }
})