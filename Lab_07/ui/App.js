import { StyleSheet, Text, View } from 'react-native'
import { Screen_01, Screen_02, Screen_03 } from './screen/Ex_01'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Screen_01" component={Screen_01} options={{ headerShown: false }} />
				<Stack.Screen name="Screen_02" component={Screen_02} options={{ headerShown: false }} />
				<Stack.Screen name="Screen_03" component={Screen_03} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

