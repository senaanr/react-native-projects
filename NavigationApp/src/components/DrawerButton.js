import { TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'


export default class DrawerButton extends Component {
    toggleMenu = () => {
        this.props.navigation.toggleDrawer();
    }
  render() {
    return (
      <TouchableOpacity 
      onPress={this.toggleMenu}
      style={{paddingHorizontal:10}}>
        <Icon 
        name="android-menu"
        size={25}
        />
      </TouchableOpacity>
    )
  }
}
