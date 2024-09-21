import { StyleSheet, Text, View } from 'react-native'
import { Product_Detail } from './screen'
export default function App() {
	return (
		<View style={styles.container}>
			<Product_Detail />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
