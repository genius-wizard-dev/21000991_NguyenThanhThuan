import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'

const Screen_01 = () => {
  const navigation = useNavigation()
  const data = [
    {
      "id": 1,
      "product_name": "Ca nấu lẩu, nấu mì mini",
      "shop": "Shop Devang",
      "action": "Chat",
      "image": require('../assets/ca_nau_lau.svg')
    },
    {
      "id": 2,
      "product_name": "1KG KHÔ GÀ BƠ TỎI",
      "shop": "Shop LTD Food",
      "action": "Chat",
      "image": require('../assets/ga_bo_toi.svg')
    },
    {
      "id": 3,
      "product_name": "Xe cần cẩu đa năng",
      "shop": "Shop Thế giới đồ chơi",
      "action": "Chat",
      "image": require('../assets/xa_can_cau.svg')
    },
    {
      "id": 4,
      "product_name": "Đồ chơi dạng mô hình",
      "shop": "Shop Thế giới đồ chơi",
      "action": "Chat",
      "image": require('../assets/do_choi_dang_mo_hinh.svg')
    },
    {
      "id": 5,
      "product_name": "Lãnh đạo giản đơn",
      "shop": "Shop Minh Long Book",
      "action": "Chat",
      "image": require('../assets/lanh_dao_gian_don.svg')
    },
    {
      "id": 6,
      "product_name": "Hiểu lòng con trẻ",
      "shop": "Shop Minh Long Book",
      "action": "Chat",
      "image": require('../assets/hieu_long_con_tre.svg')
    },
    {
      "id": 7,
      "product_name": "Donal Trump Thiên tài lãnh đạo",
      "shop": "Shop Minh Long Book",
      "action": "Chat",
      "image": require('../assets/trump.svg')
    }
  ]

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.item_text}>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode='tail'>{item.product_name}</Text>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode='tail'>{item.shop}</Text>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.button_text}>{item.action}</Text>
        </Pressable>
      </View>
    )
  }

    return (
        <>
        <View style={styles.header}>
            <Pressable style={styles.header_text} onPress={() => navigation.navigate('Screen_02')}>
                <Image source={require('../assets/vector.svg')} style={styles.header_icon} />
            </Pressable>
              <Text style={styles.header_center}>Chat</Text>
            <View style={styles.header_right}>
                <Image source={require('../assets/cart.svg')} style={styles.header_icon} />
            </View>
        </View>
        <Text style={styles.header_text}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
        <View style={styles.container}>
            <FlatList 
              data={data} 
              renderItem={renderItem} 
              keyExtractor={item => item.id}  
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
        <View style={styles.footer}>
           <View style={styles.footer_left}>
            <Image source={require('../assets/footer_01.svg')} style={styles.footer_icon} />
           </View>
           <View style={styles.footer_center}>
            <Image source={require('../assets/vector_02.svg')} style={styles.footer_icon} />
           </View>
           <View style={styles.footer_right}>
              <Image source={require('../assets/vector_03.svg')} style={styles.footer_icon} />
           </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  header_icon: {
    width: 20,
    height: 20,
  },
  header_center: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Roboto',
  },
  header_text: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Roboto',
    textAlign: 'left',
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  image: {
    width: 100  ,  
    height: 100,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Roboto',
    textAlign: 'left',
    width: 170,
  },
  button: {
    backgroundColor: '#F31111',
    width: 100,
    height: 50,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text: {
    color: '#fff',
    fontSize: 16, 
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  item_text: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    overflow: 'hidden',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1BA9FF',
  },
  footer_icon: {
    width: 20,
    height: 20, 
    marginHorizontal: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#C4C4C4',
    width: '100%',
  },
})

export default Screen_01;