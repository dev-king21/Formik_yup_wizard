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
            CompanyLogo: '',
            Facebook: '',
            Linkedin: '',
            Twitter: '',
        }}
        onSubmit={(values) => {
          Alert.alert(JSON.stringify(values));
          // this.props.navigation.navigate('Skills');
        }}
        validationSchema = {yup.object().shape({
          CompanyLogo: yup
                .string()
                .required(),
          Facebook: yup  
                .string()
                .required(),
          Linkedin: yup
                .string()
                .required(),
          Twitter: yup
                .string()
                .required()
        })}
        >
        {(
            {values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit, handleReset}) => (
            
              <View style={styles.container}>  
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Company Logo"
                  value={values.CompanyLogo}
                  onChangeText={handleChange('CompanyLogo')}
                  onBlur={() => setFieldTouched('CompanyLogo')}
                />      
                {touched.CompanyLogo && errors.CompanyLogo &&
                    <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.CompanyLogo}</Text>
                }
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Facebook"
                  value={values.Facebook}
                  onChangeText={handleChange( 'Facebook')}
                  onBlur={() => setFieldTouched('Facebook')}
                />
                {touched.Facebook && errors.Facebook &&
                    <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.Facebook}</Text>
                }
                <TextInput
                  style={styles.inputStyle}
                  placeholder="LinkedIn"
                  value={values.Linkedin}
                  onChangeText={handleChange('Linkedin')}
                  onBlur={() => setFieldTouched('Linkedin')}
                  
                />  
                {touched.Linkedin && errors.Linkedin &&
                    <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.Linkedin}</Text>
                }
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Twitter"
                  value={values.Twitter}
                  onChangeText={handleChange('Twitter')}
                  onBlur={() => setFieldTouched('Twitter')}
                />    
                {touched.Twitter && errors.Twitter &&
                    <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.Twitter}</Text>
                }
                <View style={styles.buttons}>
                  
                  <TouchableOpacity style={{
                      width: global.width * 0.3, height: 40, alignItems: 'center', marginTop: 20,
                      justifyContent: 'center', borderRadius: 10,
                      backgroundColor: '#3740FE'
                    }} onPress={() => this.props.navigation.navigate('CompanySize')}>
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
  