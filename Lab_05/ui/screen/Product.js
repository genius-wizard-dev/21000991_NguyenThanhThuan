import React from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const productData = {
  title: "Điện Thoại Vsmart Joy 3 - Hàng chính hãng",
  rating: 5,
  ratingCount: 828,
  price: "1.790.000 đ",
  oldPrice: "1.790.000 đ",
  discountText: "Ở ĐÂU RẺ HƠN HOÀN TIỀN",
  colorSelectionText: "4 MÀU-CHỌN MÀU",
  buyButtonText: "CHỌN MUA",
  colors: ['black', 'red', 'blue', 'silver']
}

export default function Product() {
    const navigation = useNavigation()
    const [color, setColor] = React.useState('black')

    const handleColorSelection = () => {
        navigation.navigate('Product_Color', { productData, setColor, color })
    }
	return (
		<View style={styles.container}>
			<Image source={color === 'black' ? require('../assets/vs_black.png') : 
							color === 'red' ? require('../assets/vs_red.png') :
							color === 'blue' ? require('../assets/vs_blue.png') :
							color === 'silver' ? require('../assets/vs_silver.png') :
							require('../assets/vs_black.png')} 
				   style={styles.productImage} />
			<View style={styles.infoContainer}>
				<Text style={styles.productTitle}>{productData.title}</Text>
				<View style={styles.ratingContainer}>
					<Text style={styles.rating}>{'⭐'.repeat(productData.rating)}</Text>
					<Text style={styles.ratingCount}>(Xem {productData.ratingCount} đánh giá)</Text>
				</View>
				<View style={styles.priceContainer}>
					<Text style={styles.price}>{productData.price}</Text>
					<Text style={styles.oldPrice}>{productData.oldPrice}</Text>
				</View>
				<View style={styles.discountContainer}>
					<Text style={styles.discountText}>{productData.discountText}</Text>
				</View>
				<Pressable style={styles.colorSelectionButton} onPress={handleColorSelection}>
					<Text style={styles.colorSelectionText}>{productData.colorSelectionText}</Text>
					<Text style={styles.colorSelectionArrow}>{'>'}</Text>
				</Pressable>
				<Pressable style={styles.buyButton}>
					<Text style={styles.buyButtonText}>{productData.buyButtonText}</Text>
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		backgroundColor: 'white',
		paddingTop: 50,
	},
	productImage: {
		width: 360,
		height: 360,
		resizeMode: 'contain',
	},
	infoContainer: {
		gap: 10,
		width: '80%',
		paddingVertical: 50,
	},
	productTitle: {
		fontSize: 15,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	ratingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
	},
	rating: {
		color: '#F2DD1B',
		marginRight: 5,
	},
	ratingCount: {
		color: '#4A4A4A',
		fontSize: 12,
	},
	priceContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
	},
	price: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#EE0D0D',
		marginRight: 10,
	},
	oldPrice: {
		fontSize: 14,
		textDecorationLine: 'line-through',
		color: '#808080',
	},
	discountContainer: {
		marginBottom: 10,
	},
	discountText: {
		color: '#FA0000',
		fontSize: 12,
		fontWeight: 'bold',
	},
	colorSelectionButton: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#000000',
		borderRadius: 10,
		padding: 12,
		marginVertical: 10,
		height: 50,
	},
	colorSelectionText: {
		fontSize: 15,
		fontWeight: 'bold',
	},
	colorSelectionArrow: {
		fontSize: 15,
		fontWeight: 'bold',
	},
	buyButton: {
		backgroundColor: '#EE0D0D',
		paddingVertical: 12,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 10,
		height: 50,
	},
	buyButtonText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16,
	},
})
