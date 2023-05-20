import { Button, Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class AboutModal extends Component {
    render() {
        const { goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>About Modal</Text>
                <Button
                    title='Close'
                    onPress={() => { goBack() }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    title: {
        fontSize: 35
    }
})