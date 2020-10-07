/**
 * @format
 */

import { AppRegistry, Dimensions, StatusBar } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

var { width, height } = Dimensions.get('window')
global.width = width;
global.height = Platform.OS === 'android' ? Dimensions.get('screen').height - StatusBar.currentHeight
    : Dimensions.get('window').height;

AppRegistry.registerComponent(appName, () => App);
