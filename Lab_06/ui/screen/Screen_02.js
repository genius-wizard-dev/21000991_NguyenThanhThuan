import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, FlatList, TextInput } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
const Screen_02 = () => {
  const navigation = useNavigation()
  const data = [
	{
	  "id": 1,
	  "product_name": "Cáp chuyển từ Cổng USB sang PS2",
	  "price": "69.900 đ",
	  "discount": "-39%",
	  "rating": 4,
	  "reviews": 15,
	  "image": require('../assets/Screen_02/carbusbtops21.svg')
	},
	{
	  "id": 2,
	  "product_name": "Cáp chuyển từ Cổng USB sang PS2",
	  "price": "69.900 đ",
	  "discount": "-39%",
	  "rating": 4,
	  "reviews": 15,
	  "image": require('../assets/Screen_02/daucam_1.svg')
	},
	{
	  "id": 3,
	  "product_name": "Cáp chuyển từ Cổng USB sang PS2",
	  "price": "69.900 đ",
	  "discount": "-39%",
	  "rating": 4,
	  "reviews": 15,
	  "image": require('../assets/Screen_02/dauchuyendoi_1.svg')
	},
	{
	  "id": 4,
	  "product_name": "Cáp chuyển từ Cổng USB sang PS2",
	  "price": "69.900 đ",
	  "discount": "-39%",
	  "rating": 4,
	  "reviews": 15,
	  "image": require('../assets/Screen_02/dauchuyendoips2_1.svg')
	},
	{
	  "id": 5,
	  "product_name": "Cáp chuyển từ Cổng USB sang PS2",
	  "price": "69.900 đ",
	  "discount": "-39%",
	  "rating": 4,
	  "reviews": 15,
	  "image": require('../assets/Screen_02/daynguon_1.svg')
	},
	{
	  "id": 6,
	  "product_name": "Cáp chuyển từ Cổng USB sang PS2",
	  "price": "69.900 đ",
	  "discount": "-39%",
	  "rating": 4,
	  "reviews": 15,
	  "image": require('../assets/Screen_02/giacchuyen_1.svg')
	}
  ]
  
  const [searchText, setSearchText] = useState('Dây cáp usb')

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={item.image} style={styles.itemImage} />
        <Text style={styles.itemName} numberOfLines={2} ellipsizeMode='tail'>{item.product_name}</Text>
        <View style={styles.ratingContainer}>
          <Image source={require('../assets/Screen_02/Star.svg')} style={styles.starIcon} />
			{Array.from({length: 4}).map((_,index) => (
				<Image 
					key={index} 
					source={index + 1  < item.rating
						? require('../assets/Screen_02/Star.svg')
						: require('../assets/Screen_02/Star_01.svg')
					} 
					style={styles.starIcon} 
				/>
			))}
          <Text style={styles.reviewText}>({item.reviews})</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.discount}>{item.discount}</Text>
        </View>
      </View>
    )
  }

    return (
        <>
        <View style={styles.header}>
            <Pressable style={styles.headerLeft} onPress={() => navigation.navigate('Screen_01')}>
                <Image source={require('../assets/vector.svg')} style={styles.headerIcon} />
            </Pressable>
            <View style={styles.headerCenter}>
                <View style={styles.searchContainer}>
                    <Image source={require('../assets/Screen_02/search.svg')} style={styles.searchIcon} />
                    <TextInput 
                        style={styles.searchInput}
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </View>
            </View>
            <View style={styles.headerRight}>
                <View style={styles.cartContainer}>
                    <Image source={require('../assets/cart.svg')} style={styles.headerIcon} />
                    <Text style={styles.cartNumber}>1</Text>
                </View>
				<Pressable style={styles.menuContainer}>
						{Array.from({length: 3}).map((_, index) => (
							<View key={index} style={styles.menuDot}></View>
						))}
				</Pressable>
            </View>
        </View>
        <Text style={styles.headerText}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
        <View style={styles.container}>
            <FlatList 
              data={data} 
              renderItem={renderItem} 
              keyExtractor={item => item.id.toString()}  
              numColumns={2}
              columnWrapperStyle={styles.row}
            />
        </View>
        <View style={styles.footer}>
           <View style={styles.footerLeft}>
            <Image source={require('../assets/footer_01.svg')} style={styles.footerIcon} />
           </View>
           <View style={styles.footerCenter}>
            <Image source={require('../assets/vector_02.svg')} style={styles.footerIcon} />
           </View>
           <View style={styles.footerRight}>
              <Image source={require('../assets/vector_03.svg')} style={styles.footerIcon} />
           </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1BA9FF',
  },
  headerIcon: {
    width: 20,
    height: 20,
  },
  headerLeft: {
    flex: 1,
	width: "10%",
  },
  headerCenter: {
    flex: 6,
  },
  headerRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
	gap: 20,
	width: "15%",
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
	width: '85%',
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartNumber: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    color: '#fff',
    borderRadius: 10,
    width: 20,
    height: 20,
    textAlign: 'center',
    lineHeight: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  menuDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  headerText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Roboto',
    textAlign: 'left',
    padding: 20,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  item: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  itemImage: {
    width: '100%',
    height: 90,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 12,
    color: '#000',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  starIcon: {
    width: 13,
    height: 13,
    marginRight: 5,
  },
  ratingText: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Roboto',
  },
  reviewText: {
    fontSize: 12,
    color: '#787878',
    fontFamily: 'Roboto',
    marginLeft: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginRight: 5,
  },
  discount: {
    fontSize: 12,
    color: '#969DAA',
    fontFamily: 'Roboto',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1BA9FF',
  },
  footerIcon: {
    width: 20,
    height: 20, 
    marginHorizontal: 10,
  },
})

export default Screen_02;