import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import UserAvatar from 'react-native-user-avatar';
import { imgAvatar } from '../../../Images/index';
import ImagePicker from 'react-native-image-picker';
import Video from 'react-native-video';

const options = {
  title: 'Select Your Avatar.',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};


const options2 = {
  title: 'Select Your Video.',
  mediaType: 'video',
  path:'video',
  quality: 1
};

export default class Signup extends Component {

  constructor() {
    super();
    this.state = {
      Avatar: null,
      Video: null,
      isLoading: false,
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  onUploadAvatar = () => {
    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        const source = { uri: "file:///" + response.path };
        this.setState({ Avatar: source });
      }
    });
  }

  onUploadVideo = () => {
    ImagePicker.showImagePicker(options2, (response) => {

      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        const source = { uri: "file:///" + response.path };
        console.log(source);
        this.setState({ Video: source });
      }
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>Avatar Image</Text>
        <TouchableOpacity onPress={this.onUploadAvatar}>
          <Image source={this.state.Avatar ? this.state.Avatar : imgAvatar} style={{
            width: 160, height: 160, borderRadius: 80, marginTop: 30, marginBottom: 20
          }} />
        </TouchableOpacity>
        <View style={{ flex: 1 }} />

        {
          this.state.Video ? <TouchableOpacity onPress={this.onUploadVideo}>
            <Video source={this.state.Video}   // Can be a URL or a local file.
            style={{ width: global.width * 0.8, height: global.width * 0.5, 
            alignItems: 'center', justifyContent: 'center', marginBottom: 20}} />
            </TouchableOpacity>: <TouchableOpacity style={{
              width: global.width * 0.8, height: 40, alignItems: 'center',
              justifyContent: 'center', borderRadius: 10,
              backgroundColor: '#3740FE'
            }} onPress={this.onUploadVideo}>
              <Text style={{ color: 'white', fontSize: 17 }}>Upload Video</Text>
            </TouchableOpacity>
        }
        
        <View style={styles.buttons}>
          <TouchableOpacity style={{
                width: global.width * 0.3, height: 40, alignItems: 'center',
                justifyContent: 'center', borderRadius: 10, marginRight: 10,
                backgroundColor: '#3740FE'
              }} onPress={() => this.props.navigation.navigate('Skills')}>
                <Text style={{ color: 'white', fontSize: 17 }}>Before</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={{
              width: global.width * 0.3, height: 40, alignItems: 'center',
              justifyContent: 'center', borderRadius: 10, marginLeft: 10,
              backgroundColor: '#3740FE'
            }} >
              <Text style={{ color: 'white', fontSize: 17 }}>Next</Text>
            </TouchableOpacity>  
        </View>
        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Login')}>
          Already Registered? Click here to login
          </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center',
    marginBottom: 20
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  buttons: {
    marginTop: 15,
    paddingTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between"
 }
});
