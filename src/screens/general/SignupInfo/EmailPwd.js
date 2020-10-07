import { Formik } from 'formik';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import * as yup from 'yup';

export default class Signup extends Component {
  
    constructor() {
      super();
      this.state = { 
       
        isLoading: false
      }
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
          <Formik
            initialValues = {{
                email: '', 
                password: '',
                confirm_password: '',
        
            }}
            onSubmit={(values) => {
              Alert.alert(JSON.stringify(values));
              this.props.navigation.navigate('Type');
            }}
            validationSchema = {yup.object().shape({
                email: yup
                    .string()
                    .email()
                    .required(),
                password: yup  
                    .string()
                    .min(8)
                    .max(20, 'Password should not exceed 20 chars.')
                    .required(),
                confirm_password: yup
                    .string()
                    .oneOf([yup.ref('password'), null], 'Passwords must match')
            })}
            >
                 {(
                     {values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit, handleReset}) => (
                    <View style={styles.container}>  
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Email"
                        value={values.email}
                        onChangeText={handleChange ('email')}
                        onBlur={() => setFieldTouched('email')}
                    />    
                    {touched.email && errors.email &&
                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
                    }     
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Password"
                        value={values.password}
                        secureTextEntry={true}
                        onChangeText={handleChange ( 'password')}
                        onBlur={() => setFieldTouched('password')}

                    />
                    {touched.password && errors.password &&
                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
                    }  
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Confirm Password"
                        value={values.confirm_password}
                        onChangeText={handleChange ( 'confirm_password')}
                        onBlur={() => setFieldTouched('confirm_password')}
                        secureTextEntry={true}
                    /> 
                    {touched.confirm_password && errors.confirm_password &&
                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.confirm_password}</Text>
                    } 
                    <View style={styles.buttons}>
                        <TouchableOpacity style={{
                          width: global.width * 0.3, height: 40, alignItems: 'center', marginTop: 20,
                          justifyContent: 'center', borderRadius: 10,
                          backgroundColor: '#3740FE'
                        }} onPress={() => this.props.navigation.navigate('UserInfo')}>
                          <Text style={{ color: 'white', fontSize: 17 }}>Before</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                          width: global.width * 0.3, height: 40, alignItems: 'center', marginTop: 20,
                          justifyContent: 'center', borderRadius: 10,
                          backgroundColor: '#3740FE'
                        }} onPress={handleSubmit}>
                          <Text style={{ color: 'white', fontSize: 17 }}>Next</Text>
                        </TouchableOpacity>  
                    </View>
                    <Text 
                        style={styles.loginText}
                        onPress={() => this.props.navigation.navigate('Login')}>
                        Already Registered? Click here to login
                    </Text>                          
                    </View>
                 )}
            </Formik>
        
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
       display: 'flex',
       flexDirection: 'row',
       justifyContent: "space-between"
    }
  });
  