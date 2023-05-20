import { Text, View , Button, Image} from 'react-native'
import React, { Component } from 'react'
import ImagePicker  from 'react-native-image-picker'

const options = {
  title: 'Select Avatar',
  customButtons: [{ name : 'fb', title: ' Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup:true,
    path:'images'
  },
  allowsEditing: true
}
export default class App extends Component {
  state={
    avatarSource:null
  }
  onSelectPicture = () => {
    ImagePicker.shorImagePicker(options, (response) => {
      console.log(response)

      const source = {uri:response.uri};

      this.setState({
        avatarSource:source
      })
    })
  }
  render() {
    return (
      <View>
        <Image source={this.state.avatarSource} style={{width:200, height:200}} />
        <Button 
        title={"Select picture"}
        onPress={this.onSelectPicture}
        />

      </View>
    )
  }
}