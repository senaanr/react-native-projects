import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import MapView from 'react-native-maps';
import Permissions from 'react-native-permissions'

export default class CurrentPosition extends Component {
    state = {
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    };

    componentDidMount() {
        /*Permissions
        .request('location')
        .then(async response => {
            const {coords} = await this.getCurrentPosition();
            setState ({
                region:{
                    ...this.state.region,
                    latitude: coords.latitude,
                    longitude: coords.longitude
                }
            })
        })*/

        const permission =  Permissions.request('location');
        if (permission !== 'authorized') {
            Alert("konum iiznlerini verin")
            return false;
        }
        const { coords } =  this.getCurrentPosition();
        this.setState({
            region: {
                ...this.state.region,
                latitude: coords.latitude,
                longitude: coords.longitude
            }
        })

    }

    getCurrentPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(position => {
                resolve(position)
            }), reject
            {
                enableHighAccuracy = false,
                    timeout = 5000,
                    maximumAge = 1000
            }
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <MapView
                    loadingEnabled={true}
                    showsUserLocation={true}
                    style={styles.map}
                    region={this.state.region}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    map: {
        flex: 1
    }
});