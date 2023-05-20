import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class buttonEx extends Component {
    onPressButton = () => {
        Alert('')
    }

    state = {
        name: ''
    }

    onChangetext = text => {
        this.setState({
            name: text
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{ marginBottom: 40 }}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonTitle}>My Button</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onPressButton}>
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={require('./src/assests/button.png')} />
                </TouchableOpacity>
                <Text>{name}</Text>
                <TextInput
                    autoCapitalize='characters'
                    keyboardAppearance='dark'
                    keyboardType= 'number-pad' 
                    placeholder='bir isim girin'
                    value={this.state.name}
                    onChangeText={this.onChangetext}
                    style={styles.myInput} />

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFEB3B',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    buttonTitle: {
        fontSize: 24
    },
    buttonContainer: {
        padding: 15,
        backgroundColor: 'orange',
        borderRadius: 15
    },
    myInput: {
        width: '100%',
        height: 40,
        borderWidth: 2,
        borderColor: 'gray'
    }
})