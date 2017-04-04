import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card.js';

// functional component

// need to receive props
const AlbumDetail = (props) => {
	return (
		<Card>
			<Text>{props.album.title}</Text>
		</Card>
	);

};

export default AlbumDetail;