import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';
import Button from './Button.js';

// functional component

// need to receive props
const AlbumDetail = ({ album }) => {

	// i want my title artist and thumbnail image from the album object
	const { title, artist, thumbnail_image, image, url } = album;

	const {
		thumbnailStyle,
		headerContentStyle,
		thumbnailContainerStyle,
		headerTextStyle, 
		imageStyle
	} = styles;

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image
						style = {thumbnailStyle} 
						source={{ uri: thumbnail_image }} 
					/>
				</View>

				<View style = {headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image style={imageStyle} source = {{ uri: image }} />
			</CardSection>

			<CardSection>
				<Button whenPressed={() => Linking.openURL(url)}>
					Buy Now
				</Button>
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
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	}, 
	headerTextStyle: {
		fontSize: 18
	}, 
	imageStyle: {
		height: 300, 
		flex: 1, 
		width: null
	}
};

export default AlbumDetail;