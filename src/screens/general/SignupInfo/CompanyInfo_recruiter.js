import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
            CompanyName: '',
            CompanyBio: '',
            CompanyLocation: '',
            CompanyWebsite: '',
        
        }}
        onSubmit={(values) => {
          Alert.alert(JSON.stringify(values));
          this.props.navigation.navigate('CompanySize');
        }}
        validationSchema = {yup.object().shape({
          CompanyName: yup
                .string()
                .required(),
          CompanyBio: yup  
                .string()
                .required(),
          CompanyLocation: yup
                .string()
                .required(),
          CompanyWebsite: yup
                .string()
                .required()
        })}
        >
            {(
                {values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit, handleReset}) => (
                  <View style={styles.container}>  
                    <TextInput
                      style={styles.inputStyle}
                      placeholder="Company name"
                      value={values.CompanyName}
                      onChangeText={handleChange ('CompanyName')}
                      onBlur={() => setFieldTouched('CompanyName')}
                      />
                    {touched.CompanyName && errors.CompanyName &&
                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.CompanyName}</Text>
                    }      
                    <TextInput
                      style={styles.inputStyle}
                      placeholder="Company Bio"
                      value={values.CompanyBio}
                      onChangeText={handleChange ( 'CompanyBio')}
                      onBlur={() => setFieldTouched('CompanyBio')}
                      />
                    {touched.CompanyBio && errors.CompanyBio &&
                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.CompanyBio}</Text>
                    }
                    <TextInput
                      style={styles.inputStyle}
                      placeholder="Company Location"
                      value={values.CompanyLocation}
                      onChangeText={handleChange ('CompanyLocation')}
                      onBlur={() => setFieldTouched('CompanyLocation')}
                    />
                    {touched.CompanyLocation && errors.CompanyLocation &&
                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.CompanyLocation}</Text>
                    }   
                    <TextInput
                      style={styles.inputStyle}
                      placeholder="Company Website"
                      value={values.CompanyWebsite}
                      onChangeText={handleChange ('CompanyWebsite')}
                      onBlur={() => setFieldTouched('CompanyWebsite')}
                    />
                    {touched.CompanyWebsite && errors.CompanyWebsite &&
                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.CompanyWebsite}</Text>
                    }   
                    <View style={styles.buttons}>
                      <TouchableOpacity style={{
                          width: global.width * 0.3, height: 40, alignItems: 'center', marginTop: 20,
                          justifyContent: 'center', borderRadius: 10,
                          backgroundColor: '#3740FE'
                        }} onPress={() => this.props.navigation.navigate('Type')}>
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
        marginTop: 15,
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between"
     }
  });
  