import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import LoginForm from './LoginForm'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headBackround} />

                <KeyboardAvoidingView behavior={"position"}>
                    <View>
                        <Text style={styles.logo}>MGS</Text>
                        <Text style={styles.logoDescription}>Property & Tax Survey</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.loginArea}>
                            <Text style={styles.loginAreaTitle}>Property Tax Server</Text>
                            <Text style={styles.loginAreaDescription}>Unique Door No Easily Fill Your Entire Property Tax Using App</Text>

                            <LoginForm />
                        </View>
                    </ScrollView>
                    <View style={styles.signUpArea}>
                        <Text style={styles.signUpDescription}>Don't have an account?</Text>
                        <TouchableOpacity>
                            <Text style={styles.signUpText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingVertical: 80
    },
    headBackround: {
        position: 'absolute', //nesne havada kalır
        top: 0,
        left: 0,
        height: 250,
        width: '100%',
        backgroundColor: '#1572de'
    },
    logo: {
        textAlign: 'center',
        fontSize: 42,
        fontWeight: 'bold',
        color: '#f2f2f2'
    },
    logoDescription: {
        textAlign: 'center',
        color: '#f2f2f2'
    },
    loginArea: {
        marginHorizontal: 40,
        marginVertical: 40,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,

        shadowColor: 'black',
        shadowOpacity: .2,
        shadowRadius: 3,//gölgeyi yayma
        shadowOffset: {
            width: 0, //sağa doğru gölge verme
            height: 2
        },
        elevation: 4
    },
    loginAreaTitle: {
        fontSize: 20,
        textAlign: 'center'
    },
    loginAreaDescription: {
        fontSize: 12,
        color: '#7e868f',
        marginVertical: 10
    },
    signUpArea:{
        alignItems:'center'
    },
    signUpDescription:{
        color:'#999'
    },
    signUpText:{
        color:'#666'
    }
})