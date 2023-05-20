import { Text, View, Button, StyleSheet } from 'react-native'
import React, { Component } from 'react'

import {observer,inject} from 'mobx-react'

@inject('PersonStore')
@observer
export default class Person extends Component {
    render() {
        const {PersonStore} = this.props
        return (
            <View>
                <Text style={styles.text}>{PersonStore.fullName}</Text>
                <Button
                    title={"change name"}
                    onPress={() => PersonStore.changeName()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        textAlign:'center'
    }
})