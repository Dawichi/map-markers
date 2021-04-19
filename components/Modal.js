import React from 'react'
import { Dimensions, StyleSheet, View, Modal } from 'react-native'

export default ({ children, visibility }) => {
	
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={visibility}
		>
			<View style={styles.center}>
				<View style={styles.modalView}>
					{children}
				</View>
			</View>
		</Modal>
	)
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.3)',
	},
	modalView: {
		minWidth: width - 100,
		backgroundColor: '#fff',
		borderRadius: 5,
		shadowColor: '#000',
		shadowOffset: {
			height: 3,
			width: 0,
		},
	},
})
