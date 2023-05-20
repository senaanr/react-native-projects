import { Text, View, StyleSheet, Button } from 'react-native'
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('CounterStore', 'PersonStore')
@observer // observable olarak tanımlanan değişkenleri bu sınıf üzerinde takip eder
export default class Counter extends Component {
    render() {
        const { CounterStore, PersonStore } = this.props

        return (
            <View>
                <Text style={styles.text}>{CounterStore.count}</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        title={"decremenet"}
                        onPress={() => CounterStore.decrement()}
                    />
                    <Button
                        title={"increment"}
                        onPress={() => CounterStore.increment()}
                    />
                </View>
                <Text style={{ textAlign: 'center' }}>{PersonStore.fullName}</Text>
                <Button
                    title={"change name"}
                    onPress={() => PersonStore.changeName()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 38,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row'
    }
})