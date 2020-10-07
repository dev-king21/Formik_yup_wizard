import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as yup from 'yup';

export default class Signup extends Component {
  
    constructor() {
      super();
      this.state = { 
        
       
        isLoading: false
      }
    }
  
   /*  updateInputVal = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
    } */
  
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
            ShortBio: '',
            Location: '',
            Language: '',
            CurrentJob: '',
          
        }}
        onSubmit={(values) => {
          Alert.alert(JSON.stringify(values));
          this.props.navigation.navigate('Skills');
        }}
        validationSchema = {yup.object().shape({
            ShortBio: yup
                .string()
                .required(),
            Location: yup  
                .string()
                .required(),
            Language: yup
                .string()
                .required(),
            CurrentJob: yup
                .string()
                .required()
        })}
        >
            {(
                {values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit, handleReset}) => (
                  <View style={styles.container}>  
                    <TextInput
                      style={styles.inputStyle}
                      placeholder="Short Bio"
                      value={values.ShortBio}
                      onChangeText={handleChange ( 'ShortBio')}
                      onBlur={() => setFieldTouched('ShortBio')}
                    />    
                    {touched.ShortBio && errors.ShortBio &&
                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.ShortBio}</Text>
                    }   
                    <TextInput
                      style={styles.inputStyle}
                      placeholder="Location"
                      value={values.Location}
                      onChangeText={handleChange ('Location')}
                      onBlur={() => setFieldTouched('Location')}
                    />
                    {touched.Location && errors.Location &&
                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.Location}</Text>
                    } 
                    <TextInput
                      style={styles.inputStyle}
                      placeholder="Language"
                      value={values.Language}
                      onChangeText={handleChange ( 'Language')}
                      onBlur={() => setFieldTouched('Language')}
                    />   
                    {touched.Language && errors.Language &&
                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.Language}</Text>
                    } 
                    <TextInput
                      style={styles.inputStyle}
                      placeholder="Current Job"
                      value={values.CurrentJob}
                      onChangeText={handleChange ('CurrentJob')}
                      onBlur={() => setFieldTouched('CurrentJob')}
                    />  
                    {touched.CurrentJob && errors.CurrentJob &&
                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.CurrentJob}</Text>
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
  