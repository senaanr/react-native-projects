import { Text, View , StyleSheet, FlatList} from 'react-native'
import React, { Component } from 'react'
import PlacesItem from './PlacesItem'

export default class Places extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
        data={this.props.places}
        keyExtractor={(item,key) => item.id.toString()}
        renderItem={({item}) => <PlacesItem map={this.props.map} item={item}/>}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{marginRight:10}} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:140,
        padding:10,
    }
})