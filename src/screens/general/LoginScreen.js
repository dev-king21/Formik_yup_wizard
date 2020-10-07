import React from 'react';
// import {View, Text} from 'react-native';
import { StyleSheet,Text, View, Button, TextInput } from 'react-native'

export default class LoginScreen extends React.Component {
  state = {
    email: '',
    password: ''
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  handleEmailChange = email => {
    this.setState({ email })
  }

  handlePasswordChange = password => {
    this.setState({ password })
  }

  onLogin = async () => {
    const { email, password } = this.state
    try {
      if (email.length > 0 && password.length > 0) {
        this.props.navigation.navigate('App')
      }
    } catch (error) {
      alert(error)
    }
  }

  goToSignup = () => this.props.navigation.navigate('Signup')
  render() {
    const { email, password } = this.state
    return (
      <View style={styles.container}>  
        <TextInput
          style={styles.inputStyle}
          name='email'
          placeholder="Email"
          value={email}
          onChangeText={this.handleEmailChange}
        />
        <TextInput
          style={styles.inputStyle}
          name='password'
          value={password}
          placeholder='Enter password'
          secureTextEntry
          onChangeText={this.handlePasswordChange}
        />   
        <Button
          color="#3740FE"
          title="Signin"
          // onPress={() => this.userLogin()}
        />   

        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Signup')}>
          Don't have account? Click here to signup
        </Text>                          
      </View>
    )
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
  }
})

