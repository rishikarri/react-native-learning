import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';

// functional component

// need to receive props
const AlbumDetail = ({ album }) => {

	// i want my title artist and thumbnail image from the album object
	const { title, artist, thumbnail_image } = album;

	return (
		<Card>
			<CardSection>
				<View>
					<Image source={{ uri: props.album.thumbnail_image }} />
				</View>

				<View style = {styles.headerContentStyle}>
					<Text>{props.album.title}</Text>
					<Text>{props.album.artist}</Text>
				</View>
			</CardSection>
		</Card>
	);

};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	}
}

export default AlbumDetail;