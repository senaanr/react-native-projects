import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Map extends Component {
  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  }

  async componentDidMount(){
    try{
      const data = await this.getCurrentPosition();
    }catch(e) {
      Alert("Konum alınamadı")
    }
  }

  getCurrentPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => resolve(position),//success
        () => reject(), //fail
        {
          timeout:500,
          maximumAge:1000,
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
        />
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
    flex:1
  }
})