import React from 'react'
import { Dimensions, StyleSheet, Button, View } from 'react-native'

export default ({ onPressLeft, textLeft, togglePointsFilter }) => {
	
	return (
		<View style={styles.panel}>
			<Button title={textLeft} onPress={onPressLeft} />
			<Button title='Show / Hide' onPress={togglePointsFilter} />
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
