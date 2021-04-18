import React from 'react'
import { Dimensions, StyleSheet, Button, View } from 'react-native'

export default () => {
	
	return (
		<View style={styles.panel}>
			<Button title='List Markers' />
			<Button title='Show / Hide' />
		</View>
	)
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
	panel: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: width,
	},
})
