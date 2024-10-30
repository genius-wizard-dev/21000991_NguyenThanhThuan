import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native';
const Header = ({reverse}) => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack()
    }
    return (
        <View style={{ width: '100%', flexDirection: reverse ? 'row-reverse' : 'row', gap: 20, justifyContent: 'space-between', alignItems: 'center' }}>
        <AntDesign name="arrowleft" size={24} color="black" onPress={handleBack} />
        <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
        <Image source={require('../../assets/avatar.svg')} style={{ width: 65, height: 65 }}/>
        <View>
          <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10 }}>Hi Twinkle</Text>
          <Text style={{ fontSize: 14, color: "#171A1F"}}>Have agrate day a head</Text>
        </View>
        </View>
      </View>
    )
}
export default Header