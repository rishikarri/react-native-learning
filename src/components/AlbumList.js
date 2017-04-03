import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {

	componentWillMount() {
		console.log('hi component will mount');		
	}
	render(){
		return (
			<View>
				<Text> AlbumList!!!</Text>
			</View>
		);	
	}
	
}


export default AlbumList;