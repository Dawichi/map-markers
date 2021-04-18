import React from 'react'
import MapView from 'react-native-maps'
import { Dimensions, StyleSheet } from 'react-native'

export default ({ onLongPress }) => {
	
	return (
		<MapView
			style={styles.map}
			onLongPress={onLongPress}
		/>
	)
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
	map: {
		height: height - 130,
		width: width,
	},
})
