import { StyleSheet, Text, View } from 'react-native'
import { Product, Product_Color } from './screen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Product" component={Product} />
				<Stack.Screen name="Product_Color" component={Product_Color} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

