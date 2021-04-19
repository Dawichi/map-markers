import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View, Button } from 'react-native'
import { Map, Modal, Panel, Input, List } from './components'

export default function App() {

	const [points, setPoints] = useState([])
	const [pointTemp, setPointTemp] = useState({})
	const [name, setName] = useState('')
	const [visibility, setVisibility] = useState(false)
	const [visibilityFilter, setVisibilityFilter] = useState('new_point') // new_point, all_points

	const handleLongPress = ({ nativeEvent }) => {
		setPointTemp(nativeEvent.coordinate)
		setVisibility(true)
		setVisibilityFilter('new_point')
	} 

	const handleChangeText = text => {
		setName(text)
	}

	const handleSubmit = () => {
		const newPoint = { coordinate: pointTemp, name: name }
		setPoints(points.concat(newPoint))
		setVisibility(false)
		setName('')
	}

	const handleList = () => {
		setVisibilityFilter('all_points')
		setVisibility(true)
	}

	return (
	  <View style={styles.container}>
		<Map onLongPress={handleLongPress} />
		<Panel onPressLeft={handleList} textLeft='List markers' />
		<Modal visibility={visibility}>
			{
				visibilityFilter === 'new_point'
				?
				<>
					<Input
						title="Name"
						placeholder="Name of the marker"
						onChangeText={handleChangeText}
					/>
					<Button title="Accept" onPress={handleSubmit} />
				</>
				: <List points={points} />
			}
		</Modal>
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