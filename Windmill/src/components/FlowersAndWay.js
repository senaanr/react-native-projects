import { Text, View, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'

export default () => (
    <View style={styles.container}>
        <Image 
        source={require('../../assests/flowers-and-way.png')}
        style={styles.flowers}
        resizeMode={'contain'}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        zIndex:5
    },
    flowers:{
        width:'80%'
    }
})