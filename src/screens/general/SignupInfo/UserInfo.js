import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {Formik} from 'formik';
import * as yup from 'yup';

export default class Signup extends Component {
    render() {
      return (
          <Formik
            initialValues = {{
                firstName: '',
                lastName: '',
                DOB: '',
                PhoneNumber: ''
            }}
            onSubmit={(values) => {
              Alert.alert(JSON.stringify(values));
              this.props.navigation.navigate('Email')
            }}
            validationSchema = {yup.object().shape({
                firstName: yup
                    .string()
                    .required('Please, provide your first name!'),
                lastName: yup  
                    .string()
                    .required('Please, provide your last name!'),
                DOB: yup  
                    .string()
                    .required('Please, provide your DOM!'),
                PhoneNumber: yup  
                    .string()
                    .required('Please, provide your Phone Number!')
            })}
            
            >
                {({values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit}) => (
                    <View style={styles.container}>  
                    <TextInput
                      style={styles.inputStyle}
                      placeholder="FirstName"
                      value={values.firstName}
                      onChangeText={handleChange ('firstName')}
                      onBlur={() => setFieldTouched('firstName')}
                    />    
                    {touched.firstName && errors.firstName &&
                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.firstName}</Text>
                    }     
                    <TextInput
                      style={styles.inputStyle}
                      placeholder="Last name"
                      value={values.lastName}
                      onChangeText={handleChange ('lastName')}
                      onBlur={() => setFieldTouched('lastName')}
                    />
                    {touched.lastName && errors.lastName &&
                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.lastName}</Text>
                    }   
                    <TextInput
                      style={styles.inputStyle}
                      placeholder="DOB"
                      value={values.DOB}
                      onChangeText={handleChange ('DOB')}
                      onBlur={() => setFieldTouched('DOB')}
                      
                    />   
                    {touched.DOB && errors.DOB &&
                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.DOB}</Text>
                    } 
                     <TextInput
                      style={styles.inputStyle}
                      placeholder="phoneNumber"
                      value={values.PhoneNumber}
                      onChangeText={ handleChange ('PhoneNumber')}
                      onBlur={() => setFieldTouched('PhoneNumber')}
                      
                    />  
                    {touched.PhoneNumber && errors.PhoneNumber &&
                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.PhoneNumber}</Text>
                    }  
                    <TouchableOpacity style={{
                      width: global.width * 0.8, height: 40, alignItems: 'center', marginTop: 20,
                      justifyContent: 'center', borderRadius: 10,
                      backgroundColor: '#3740FE'
                    }} onPress={handleSubmit}>
                      <Text style={{ color: 'white', fontSize: 17 }}>Next</Text>
                    </TouchableOpacity>
            
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
    }
  });
  