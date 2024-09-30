import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from './header'
import Feather from '@expo/vector-icons/Feather';
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native';
const Screen_03 = ({route}) => {
  const navigation = useNavigation();
  const {setTodos, todos} = route.params
  const [job, setJob] = useState('')
  const handleAddJob = () => {
    if(job.length > 0){
    setTodos([...todos, job])
    navigation.goBack()
  }
}
    return (
      <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', paddingVertical: 80, paddingHorizontal: 20 }}>
        <Header reverse={true} />
        <View style={{ marginBottom: "auto", marginTop: 50, flexDirection: 'column', gap: 30, justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', textTransform: 'uppercase' }}>Add your job</Text>
          <View style={{ flexDirection: 'row', width: "100%", gap: 20, alignItems: 'center', borderWidth: 1, borderColor: '#171A1F', borderRadius: 10, height: 50, paddingHorizontal: 20 }}>
            <Feather name="list" size={24} color="green" />
            <TextInput placeholder='input your job' style={{ borderWidth: 0, width: "90%" }} onChangeText={(text) => setJob(text)} />
          </View>
        <TouchableOpacity onPress={handleAddJob} style={{ backgroundColor: "#00BDD6", width: 200, height: 50, paddingHorizontal: 30, paddingVertical: 15, borderRadius: 10, marginVertical: 30, justifyContent: "center", alignItems: "center" }}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: 'bold', textTransform: "uppercase" }}>FINISH</Text>
            <Feather name="arrow-right" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <View>
          <Image source={require('../../assets/note.svg')} style={{ width: 200, height: 200 }} />
        </View>
        </View>
      </View>
    )
  
}

export default Screen_03