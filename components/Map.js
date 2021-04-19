import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { Dimensions, StyleSheet } from 'react-native'

export default ({ onLongPress, points, pointsFilter }) => {
	
	return (
		<MapView
			style={styles.map}
			onLongPress={onLongPress}
		>
			{pointsFilter && points.map(x => 
				<Marker
					key={x.name}
					coordinate={x.coordinate}
					title={x.name}
				/>)}
		</MapView>
	)
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
	map: {
		height: height - 130,
		width: width,
	},
})
