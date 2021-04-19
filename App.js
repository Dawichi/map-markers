import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { Map, Modal, Panel, Input, List } from './components'

export default function App() {

	const [points, setPoints] = useState([])
	const [pointTemp, setPointTemp] = useState({})
	const [name, setName] = useState('')
	const [visibility, setVisibility] = useState(false)
	const [visibilityFilter, setVisibilityFilter] = useState('new_point') // new_point, all_points
	const [pointsFilter, setPointsFilter] = useState(true)

	const togglePointsFilter = () => setPointsFilter(!pointsFilter)

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
		<Map onLongPress={handleLongPress} points={points} pointsFilter={pointsFilter} />
		<Panel onPressLeft={handleList} textLeft='List markers' togglePointsFilter={togglePointsFilter} />
		<Modal visibility={visibility}>
			{
				visibilityFilter === 'new_point'
				?
				<View style={styles.form}>
					<Input
						title="Name"
						placeholder="Name of the marker"
						onChangeText={handleChangeText}
					/>
					<View style={styles.br}></View>
					<Button title="Accept" onPress={handleSubmit} />
				</View>
				: <List points={points} closeModal={() => setVisibility(false)} />
			}
		</Modal>
		<StatusBar style="auto" />
	  </View>
	);
  }

const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  form: {
	padding: 10,
  },
  br: {
	  margin: 10,
  },
})