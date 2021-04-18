import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Map, Modal, Panel } from './components'

export default function App() {

	const handleLongPress = (point) => {
		console.log(point)
	}  

	return (
	  <View style={styles.container}>
		<Map onLongPress={handleLongPress} />
		<Modal />
		<Panel />
		<StatusBar style="auto" />
	  </View>
	);
  }
  
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})