import React from 'react';

// import firebase from '../database/firebase';
import UserInfoScreen from './SignupInfo/UserInfo';
import EmailScreen from './SignupInfo/EmailPwd';
import TypeScreen from './SignupInfo/Type';
import CompanyInfoScreen from './SignupInfo/CompanyInfo_recruiter';
import CompanySizeScreen from './SignupInfo/Companysize_recruiter';
import CompanyContactScreen from './SignupInfo/CompanyContact_recruiter';
import BioScreen from './SignupInfo/Bio_talent';
import SkillsScreen from './SignupInfo/Skills_talent';
import AvatarScreen from './SignupInfo/Avatar_talent';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="UserInfo">
      <Stack.Screen
        name="UserInfo"
        component={UserInfoScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Email"
        component={EmailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Type"
        component={TypeScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="CompanyInfo"
        component={CompanyInfoScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="CompanySize"
        component={CompanySizeScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="CompanyContact"
        component={CompanyContactScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Bio"
        component={BioScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Skills"
        component={SkillsScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Avatar"
        component={AvatarScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

/* 
// fields for steps
const formData = {
  // 1. step for both roles (recruiter, talent)
  FirstName: '',
  LastName: '',
  DOB: '',
  PhoneNumber: '',

  // 2. step for both roles (recruiter, talent)
  Email: '',
  Password: '',
  ConfirmPassword: '',

  // 3. step for both roles (recruiter, talent)
  Type: '',

  // 4. step for recruiter
  CompanyName: '',
  CompanyBio: '',
  CompanyLocation: '',
  CompanyWebsite: '',

  // 5. step for recruiter
  CompanySize: '',
  Industry: '',
  VatNumber: '',

  // 6. step for recruiter
  CompanyLogo: '',
  Facebook: '',
  Linkedin: '',
  Twitter: '',

  // 4. step for talent
  ShortBio: '',
  Location: '',
  Language: '',
  CurrentJob: '',

  // 5. step for talent
  Skills: [],

  // 6. step for talent
  Avatar: '',
  Video: '',
};
 */