import React from 'react'
import { StyleSheet, View, Text, Modal } from 'react-native'

export default () => {
	
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={false}
		>
			<View style={styles.center}>
				<View style={styles.modalView}>
					<Text>fsdfsdf</Text>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalView: {
		backgroundColor: '#fff',
		borderRadius: 5,
		padding: 20,
		shadowColor: '#000',
		shadowOffset: {
			height: 3,
			width: 0,
		},
	},
})
