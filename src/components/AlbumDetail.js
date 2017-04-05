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
					<Image
						style = {styles.thumbnailStyle} 
						source={{ uri: thumbnail_image }} 
					/>
				</View>

				<View style = {styles.headerContentStyle}>
					<Text>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
		</Card>
	);

};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	thumbnailStyle: {
		height: 50, 
		width: 50
	}
};

export default AlbumDetail;