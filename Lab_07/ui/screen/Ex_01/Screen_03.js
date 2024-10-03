import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from './header'
import Feather from '@expo/vector-icons/Feather';
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native';
const Screen_03 = ({route}) => {
  const navigation = useNavigation();
  const [task, setTask] = useState('');
  const [id, setId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (route.params && route.params.id) {
      setId(route.params.id);
      fetchTask(route.params.id);
    }
  }, [route.params]);

  const fetchTask = async (taskId) => {
    setIsLoading(true);
    try {
        const url = `https://65fab81b3909a9a65b1b4dc5.mockapi.io/api/v1/todos/${taskId}`;
        const response = await fetch(url);
        const json = await response.json();
        console.log(json)
        setTask(json.task);
    } catch (error) {
      console.error('Lỗi khi tải thông tin công việc:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTask = async () => {
    if (task.length > 0) {
      setIsLoading(true);
      const url = 'https://65fab81b3909a9a65b1b4dc5.mockapi.io/api/v1/todos';
      const body = {
          task: task
      };
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body)
        });
        if (response.ok) {
          console.log('Công việc đã được thêm thành công');
          navigation.navigate('Screen_02', { refresh: true });
        } else {
          console.log('Có lỗi khi thêm công việc');
        }
      } catch (error) {
        console.error('Lỗi khi gửi yêu cầu:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleEditTask = async () => {
    if (task.length > 0 && id) {
      setIsLoading(true);
      const url = `https://65fab81b3909a9a65b1b4dc5.mockapi.io/api/v1/todos/${id}`;
      const body = {
          task: task
      };
      try {
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body)
        });
        if (response.ok) {
          console.log('Công việc đã được cập nhật thành công');
          navigation.navigate('Screen_02', { refresh: true });
        } else {
          console.log('Có lỗi khi cập nhật công việc');
        }
      } catch (error) {
        console.error('Lỗi khi gửi yêu cầu:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00BDD6" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', paddingVertical: 80, paddingHorizontal: 20 }}>
      <Header reverse={true} />
        <View style={{ marginBottom: "auto", marginTop: 50, flexDirection: 'column', gap: 30, justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', textTransform: 'uppercase' }}>{id ? 'Chỉnh sửa công việc' : 'Thêm công việc mới'}</Text>
          <View style={{ flexDirection: 'row', width: "100%", gap: 20, alignItems: 'center', borderWidth: 1, borderColor: '#171A1F', borderRadius: 10, height: 50, paddingHorizontal: 20 }}>
            <Feather name="list" size={24} color="green" />
            <TextInput placeholder='Nhập công việc của bạn' style={{ borderWidth: 0, width: "90%" }} value={task} onChangeText={(text) => setTask(text)} />
          </View>
        <TouchableOpacity onPress={id ? handleEditTask : handleAddTask} style={{ backgroundColor: "#00BDD6", width: 200, height: 50, paddingHorizontal: 30, paddingVertical: 15, borderRadius: 10, marginVertical: 30, justifyContent: "center", alignItems: "center" }}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: 'bold', textTransform: "uppercase" }}>{id ? 'Cập nhật' : 'Hoàn thành'}</Text>
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