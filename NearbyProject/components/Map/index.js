import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { API_ENDPOINT, API_KEY } from '../../constants';
import axios from 'axios'

import Places from '../Places';


export default class Map extends Component {
    state = {
        region: {
            latitude: 41.0087,
            longitude: 29.0173,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0421,
        },
        places: [],
        fetching: false
    }

    async componentDidMount() {
        try {
            const { coors: { latitude, longitude } } = await this.getCurrentPosition();
            this.setState({
                region: {
                    ...this.state.region,
                    latitude,
                    longitude
                },
                fetching: true
            })

            const { data: { results } } = await axios.get(`${API_ENDPOINT}/nearbysearch/json?location=${latitude},${longitude}&radius=1000&type=restaurant&key=${API_KEY}`)
            this.setState({
                places: results,
                fetching: false
            })
        } catch (e) {
            this.setState({
                fetching: false
            })
            Alert("Konum alınamadı")
        }
    }

    getCurrentPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                position => resolve(position),//success
                () => reject(), //fail
                {
                    timeout: 500,
                    maximumAge: 1000,
                    enableHighAccuracy: false
                }
            )
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <MapView

                    style={styles.map}
                    showUserLocation={true}
                    region={this.state.region}
                    ref={ref => this.map = ref}
                >
                    {
                        this.state.places.map(place => {
                            const { geometry: { location: { lat, lng } } } = place;
                            return (
                                <Marker
                                    key={place.id}
                                    coordinate={{
                                        latitude: lat,
                                        longitude: lng
                                    }}
                                    title={place.title}
                                />
                            )
                        })
                    }
                </MapView>
                <View style={styles.placesContainer}>
                    {
                        this.state.fetching ? <Text style={styles.loading}>Loading nearby places</Text> :
                        <Places map={this.map} places={this.state.places} />
                    }
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    map: {
        flex: 1
    },
    placesContainer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height:140,
        alignItems:'center',
        justifyContent:'center'
    },
    loading:{
        padding:10,
        backgroundColor:'#f1f1f1',
        fontSize:13,
        color:'#333'
    }
})