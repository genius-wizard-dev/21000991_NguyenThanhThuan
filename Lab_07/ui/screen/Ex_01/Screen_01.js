import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { TouchableOpacity } from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
const Screen_01 = () => {
  const navigation = useNavigation()
  const handleGetStarted = () => {
    navigation.navigate('Screen_02')
}
  return (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', paddingVertical: 80 }}>
       <Image source={require('../../assets/note.svg')} style={{ width: 200, height: 200 }}/>
       <View style={{ justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: "#8353E2", width: 200, textAlign: 'center' }}>MANAGE YOUR TASK</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 40, paddingHorizontal: 20 , borderColor: '#8353E2', borderRadius: 10, borderWidth: 1, width: 300, height: 50, gap: 15 }}>
          <Fontisto name="email" size={24} color="black" />
          <TextInput style={{ width: "90%", height: 40, borderWidth: 0}} placeholder='Search'/>
        </View>
       </View>
        <TouchableOpacity onPress={handleGetStarted} 
                          style={{ backgroundColor: "#00BDD6", paddingHorizontal: 30, paddingVertical: 15, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <Text style={{ color: "white", fontSize: 16, fontWeight: 'bold', textTransform: "uppercase" }}>Get Started </Text>
              <AntDesign name="arrowright" size={24} color="white" />
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Screen_01