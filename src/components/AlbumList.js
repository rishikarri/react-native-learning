import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
	// we have an empty list of albums when we first start off
	//declare state in a new way so that we have an empty array to render at first (this will be replaced by a populated array)
	state = { 
		albums: [] 
	}; 

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => 
			this.setState({
				albums: response.data
			})
		);
	}

	renderAlbums() {
		return this.state.albums.map(album => 
			<Text key={album.title}>{album.title}</Text>
		);
	}

	render(){

		console.log(this.state);
		return (
			<View>
				{this.renderAlbums()}
			</View>
		);	
	}
	
}


export default AlbumList;