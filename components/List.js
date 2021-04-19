import React from 'react'
import { Dimensions, StyleSheet, FlatList, Text, View, Button } from 'react-native'

export default ({ points, closeModal }) => {
	
	return (
		<>
			<View style={styles.list}>
				<FlatList
					data={points.map(x => x.name)}
					renderItem={({ item }) => <View style={styles.item}><Text>{item}</Text></View>}
					keyExtractor={item => item}
				/>
			</View>
			<View style={styles.button}>
				<Button title='Close' onPress={closeModal} />
			</View>
		</>
	)
}

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
	list: {
		height: height - 250,
	},
	item: {
		borderBottomWidth: 1,
		borderColor: '#ccc',
		height: 50,
		justifyContent: 'center',
		padding: 15,
	},
	button: {
		padding: 10,
	},
})
