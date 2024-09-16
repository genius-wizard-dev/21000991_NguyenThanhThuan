import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import { Image } from 'expo-image';
import React, { useState } from 'react'

export default function ProductScreen() {
  const price = {
    oldPrice: '141.800',
    newPrice: '141.800'
  }
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.productInfo}>
          <Image source={require("../assets/book.svg")} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.productSeller}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.currentPrice}>{price.newPrice} đ</Text>
            <Text style={styles.originalPrice}>{price.oldPrice} đ</Text>
            <View style={styles.quantityContainer}>
              <View style={styles.quantitySelector}>
                <Pressable 
                  style={[styles.quantityButton, quantity <= 1 && styles.disabledButton]} 
                  disabled={quantity <= 1}
                  onPress={decreaseQuantity}
                >
                  <Text style={[styles.quantityButtonText, quantity <= 1 && {color: "#080808"}]}>-</Text>
                </Pressable>
                <Text style={styles.quantityText}>{quantity}</Text>
                <Pressable style={styles.quantityButton} onPress={increaseQuantity}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </Pressable>
              </View>
              <Text style={styles.buyLaterText}>Mua sau</Text>
            </View>
          </View>
        </View>
        <View style={styles.discountSection}>
          <Text style={styles.boldText}>Mã giảm giá đã lưu</Text>
          <Text style={styles.blueText}>Xem tại đây</Text>
        </View>
        <View style={styles.discountInputContainer}>
          <TextInput placeholder='Nhập mã giảm giá' style={styles.discountInput}/>
          <Pressable style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Áp dụng</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.giftSection}>
        <Text style={styles.boldText}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <Text style={styles.blueText}>Nhập tại đây?</Text>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.priceSection}>
        <Text style={styles.priceLabel}>Tạm tính</Text>
        <Text style={styles.currentPrice}>{(Number(price.newPrice.replace(/\D/g, '')) * quantity).toLocaleString('vi-VN')} đ</Text>
      </View>
      <View style={[styles.separator, styles.largeSeparator]}></View>
      <View style={styles.priceSection}>
        <Text style={[styles.priceLabel, styles.greyText]}>Thành tiền</Text>
        <Text style={styles.currentPrice}>{(Number(price.newPrice.replace(/\D/g, '')) * quantity).toLocaleString('vi-VN')} đ</Text>
      </View>
      <Pressable style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Tiến hành đặt hàng</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: "100%",
  },
  productInfo: {
    width: "100%",
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  productImage: {
    width: 110,
    height: 160,
  },
  productDetails: {
    gap: 15,
    flexDirection: 'column',
    marginLeft: 20,
  },
  productTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  productSeller: {
    fontSize: 15,
    fontWeight: "bold",
  },
  currentPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#E53935"
  },
  originalPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#c4c4c4",
    textDecorationLine: 'line-through'
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantitySelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20
  },
  quantityButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "grey",
  },
  disabledButton: {
    backgroundColor: "#C4C4C4",
  },
  quantityButtonText: {
    fontWeight: "bold",
  },
  quantityText: {
    fontWeight: "bold",
    fontSize: 20
  },
  buyLaterText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "blue"
  },
  discountSection: {
    marginTop: 10,
    width: "100%", 
    flexDirection: "row",
    gap: 15,
    marginRight: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 15,
  },
  discountInputContainer: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    gap: 15,
    justifyContent: "space-between",
    alignItems: "center"
  },
  discountInput: {
    width: "70%",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 50,
  },
  applyButton: {
    width: "30%",
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  applyButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center"
  },
  separator: {
    width: "100%",
    backgroundColor: "#c4c4c4",
    height: 20,
    marginVertical: 20,
  },
  largeSeparator: {
    height: 200,
  },
  giftSection: {
    flexDirection: 'row',
    gap: 15,
  },
  priceSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  priceLabel: {
    fontWeight: "bold",
    fontSize: 20,
  },
  greyText: {
    color: "#808080",
  },
  checkoutButton: {
    marginTop: 20,
    width: "90%",
    backgroundColor: "#E53935",
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  checkoutButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    textTransform: "uppercase"
  },
  boldText: {
    fontWeight: "bold",
  },
  blueText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "blue"
  },
})