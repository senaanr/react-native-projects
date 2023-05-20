import { Component } from "react"
import { Button, Text, View, Image, Alert, TouchableOpacity } from "react-native/types"
import React from "react"
import { createStackNavigator, createAppContainer } from '@react-navigation'

class TitleLogo extends Component {
    render() {
        return (
            <Image
                style={{ width: 38, height: 38 }}
                source={require('../assests/header-icon.png')} />
        )
    }
}

export default class HomeScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <TitleLogo />,
            headerBackTitle: 'Geri',
            headerTransparent: true,
            headerRight:(
                <TouchableOpacity style={{marginRight:10}} onPress={() => navigation.navigate('Modal')} >
                    <Text style={{color:'#333'}}>About</Text>
                 </TouchableOpacity>
            )
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <Button
                    title="Haber 1"
                    onPress={() => navigate('Detail', {
                        title: 'Kadıköyde Yangın '
                    })}></Button>

                <Button
                    title="Hber 2"
                    onPress={() => navigate('Detail', {
                        title: 'Fenerbahçe Maçı'
                    })}></Button>

                <Button
                    title="Hber 3"
                    onPress={() => navigate('Detail')}></Button>
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
    }
})