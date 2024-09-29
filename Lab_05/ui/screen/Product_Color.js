import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

const Product_Color = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { productData, color: initialColor, setColor } = route.params
  const [selectedColor, setSelectedColor] = useState(initialColor)

  const handleColorChange = (newColor) => {
    setSelectedColor(newColor)
  }

  const handleDone = () => {
    setColor(selectedColor)
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.productInfo}>
        <Image 
          source={selectedColor === 'black' ? require('../assets/vs_black.png') : 
                  selectedColor === 'red' ? require('../assets/vs_red.png') :
                  selectedColor === 'blue' ? require('../assets/vs_blue.png') :
                  selectedColor === 'silver' ? require('../assets/vs_silver.png') :
                  require('../assets/vs_black.png')}
          style={styles.productImage}
        />
        <View style={styles.textInfo}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{productData.title}</Text>
          <Text style={styles.colorText}>Màu: {selectedColor === 'black' ? 'Đen' : selectedColor === 'red' ? 'Đỏ' : selectedColor === 'blue' ? 'Xanh dương' : 'Bạc'}</Text>
          <Text style={styles.provideText}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.price}>{productData.price}</Text>
        </View>
      </View>
      <Text style={styles.chooseColorText}>Chọn một màu bên dưới:</Text>
      <View style={styles.colorOptions}>
        <Pressable style={styles.colorOption} onPress={() => handleColorChange('silver')}>
          <View style={[styles.colorCircle, { backgroundColor: 'silver' }]} />
        </Pressable>
        <Pressable style={styles.colorOption} onPress={() => handleColorChange('red')}>
          <View style={[styles.colorCircle, { backgroundColor: 'red' }]} />
        </Pressable>
        <Pressable style={styles.colorOption} onPress={() => handleColorChange('black')}>
          <View style={[styles.colorCircle, { backgroundColor: 'black' }]} />
        </Pressable>
        <Pressable style={styles.colorOption} onPress={() => handleColorChange('blue')}>
          <View style={[styles.colorCircle, { backgroundColor: 'blue' }]} />
        </Pressable>
      </View>
      <Pressable style={styles.doneButton} onPress={handleDone}>
        <Text style={styles.doneButtonText}>XONG</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  productInfo: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  textInfo: {
    marginLeft: 20,
    justifyContent: 'space-between',
    width: '50%'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  colorText: {
    fontSize: 14,
  },
  provideText: {
    fontSize: 14,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  chooseColorText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  colorOptions: {
    flexDirection: 'column',
    gap: 10,
  },
  colorOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  doneButton: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default Product_Color;