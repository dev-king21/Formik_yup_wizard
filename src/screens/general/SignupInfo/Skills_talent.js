import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Signup extends Component {
  
    constructor() {
      super();
      this.state = { 
        Skill_A: false,
        Skill_B: false,
        Skill_C: false,
        Skill_D: false,

        isLoading: false
      }
    }
  
    updateInputVal = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
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
          <View style={{ flexDirection: 'row' }}>
          <CheckBox value={this.state.Skill_A} onChange={() => {
                        this.setState({Skill_A: !this.state.Skill_A});
                    }}
          />
          <Text style={{marginTop: 5, fontSize: 17 }}>Skill A</Text>
          <CheckBox value={this.state.Skill_B} onChange={() => {
                        this.setState({Skill_B: !this.state.Skill_B});
                    }}
          />
          <Text style={{marginTop: 5, fontSize: 17 }}>Skill B</Text>
          <CheckBox value={this.state.Skill_C} onChange={() => {
                        this.setState({Skill_C: !this.state.Skill_C});
                    }}
          />
          <Text style={{marginTop: 5, fontSize: 17 }}>Skill C</Text>
          <CheckBox value={this.state.Skill_D} onChange={() => {
                        this.setState({Skill_D: !this.state.Skill_D});
                    }}
          />
          <Text style={{ marginTop: 5, fontSize: 17 }}>Skill D</Text>
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity style={{
                width: global.width * 0.3, height: 40, alignItems: 'center', marginTop: 20,
                justifyContent: 'center', borderRadius: 10,
                backgroundColor: '#3740FE'
              }} onPress={() => this.props.navigation.navigate('Bio')}>
                <Text style={{ color: 'white', fontSize: 17 }}>Before</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{
                width: global.width * 0.3, height: 40, alignItems: 'center', marginTop: 20,
                justifyContent: 'center', borderRadius: 10,
                backgroundColor: '#3740FE'
              }} onPress={() => this.props.navigation.navigate('Avatar')}>
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
  