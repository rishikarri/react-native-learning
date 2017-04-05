import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

// let's bring in the albumDetail component
import AlbumDetail from './AlbumDetail.js';

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
			<AlbumDetail key={album.title} album={album} />
		);
	}

	render(){

		console.log(this.state);
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);	
	}
	
}


export default AlbumList;