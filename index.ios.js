// index.ios.js - place code in here for ios	

// import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header.js';
import AlbumList from './src/components/AlbumList.js';

// create a component -
const App = () => {
	return (
		<View style = {{ flex: 1 }}>
			<Header  headerText={'Albums'}/>
			<AlbumList />
		</View>
	);
};
 

// Render it to the device
// let's specifically tell react native to chuck our component on the screen 

 AppRegistry.registerComponent('albums', () => App);