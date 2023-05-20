import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class MyButton extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={[styles.button,{backgroundColor:this.props.bgColor}]}>
            <Text style={[styles.text, { color:this.props.textColor}]}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

MyButton.PropTypes = {
    text : PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}
const styles = StyleSheet.create({
    button:{
        paddingVertical:15,
        paddingHorizontal:10,
        borderRadius:5,
        alignItems:'center'
    },
    text:{
        fontSize:15
    }
})