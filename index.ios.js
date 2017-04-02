// index.ios.js - place code in here for ios	

// import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header.js';


// create a component -
const App = () => {
	return (
		<Header />
	);
};
 

// Render it to the device
// let's specifically tell react native to chuck our component on the screen 

 AppRegistry.registerComponent('albums', () => App);