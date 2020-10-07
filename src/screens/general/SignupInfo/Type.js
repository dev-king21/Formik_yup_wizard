import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import RadioButtonRN from 'radio-buttons-react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class Signup extends Component {
  
    constructor() {
      super();
      this.state = { 
        res: {},
        Type: '',
        isLoading: false
      }
      this.data = [
          {
              label: 'talent',
              value: 0
          },
          {
              label: 'recruiter',
              value: 1
          }
      ]
    }
    
    updateInputVal = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
    }
    
    goForward = () => {
        if(this.state.res.value == 0)
            this.props.navigation.navigate('Bio')
        else
            this.props.navigation.navigate('CompanyInfo')
    }
    render() {
      if(this.state.isLoading){
        return(
          <View style={styles.preloader}>
            <ActivityIndicator size="large" color="#9E9E9E"/>
          </View>
        )
      }    
      return (
        <View style={styles.container}>  
            <RadioButtonRN
                data={this.data}
                initial = {1}
                selectedBtn={(e) => this.setState({res:e})}
            />
          
          <View style={styles.buttons}>
            <TouchableOpacity style={{
                width: global.width * 0.3, height: 40, alignItems: 'center', marginTop: 20,
                justifyContent: 'center', borderRadius: 10,
                backgroundColor: '#3740FE'
              }} onPress={() => this.props.navigation.navigate('Email')}>
                <Text style={{ color: 'white', fontSize: 17 }}>Before</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{
                width: global.width * 0.3, height: 40, alignItems: 'center', marginTop: 20,
                justifyContent: 'center', borderRadius: 10,
                backgroundColor: '#3740FE'
              }} onPress={() => this.goForward()}>
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
      justifyContent: "center",
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
      textAlign: 'center'
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
  