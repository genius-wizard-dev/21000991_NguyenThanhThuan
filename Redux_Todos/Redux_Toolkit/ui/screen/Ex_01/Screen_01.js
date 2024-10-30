import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Image } from 'expo-image'
import { Fontisto, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Screen_01 = () => {
  const navigation = useNavigation(); 
  const handleGetStarted = () => {
    navigation.navigate('Screen_02');
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/note.svg')} style={styles.image}/>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>QUẢN LÝ CÔNG VIỆC CỦA BẠN</Text>
        <View style={styles.searchContainer}>
          <Fontisto name="email" size={24} color="black" />
          <TextInput style={styles.searchInput} placeholder='Tìm kiếm'/>
        </View>
      </View>
      <TouchableOpacity onPress={handleGetStarted} style={styles.button}>
        <Text style={styles.buttonText}>BẮT ĐẦU</Text>
        <AntDesign name="arrowright" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 80,
  },
  image: {
    width: 200,
    height: 200,
  },
  contentContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#8353E2",
    width: 200,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 40,
    paddingHorizontal: 20,
    borderColor: '#8353E2',
    borderRadius: 10,
    borderWidth: 1,
    width: 300,
    height: 50,
    gap: 15,
  },
  searchInput: {
    width: "90%",
    height: 40,
    borderWidth: 0,
  },
  button: {
    backgroundColor: "#00BDD6",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: "center",
    gap: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: "uppercase",
  },
});

export default Screen_01