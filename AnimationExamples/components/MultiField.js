
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback, Alert, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class MultiField extends Component {
    state = {
        animationWidth: new Animated.Value(200),
        animationHeigth: new Animated.Value(200)
    }

    startAnimation = () => {
        Animated
            .timing(this.state.animationWidth, {
                duration: 300,
                toValue: 350
            })
            .start()

        Animated
            .timing(this.state.animationHeigth, {
                duration: 500,
                toValue: 350
            })
            .start()
    }

    render() {
        const animatedStyles = {
            width: this.state.animationWidth,
            height: this.state.animationHeigth
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
        backgroundColor: '#FFC107',
        justifyContent: 'center',
        alignItems: 'center'
    }
})