import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import Header from './header';
import { useApp } from '../../context';

const Screen_03 = ({ route }) => {
  const navigation = useNavigation();
  const { dispatch } = useApp();
  const [task, setTask] = useState('');
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (route.params?.id) {
      setId(route.params.id);
      fetchTask(route.params.id);
    }
  }, [route.params]);

  const fetchTask = async (taskId) => {
    setLoading(true);
    try {
      const response = await fetch(`https://65fab81b3909a9a65b1b4dc5.mockapi.io/api/v1/todos/${taskId}`);
      const json = await response.json();
      setTask(json.task);
    } catch (error) {
      console.error('Error fetching task:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (task.length === 0) return;

    setLoading(true);
    const url = id 
      ? `https://65fab81b3909a9a65b1b4dc5.mockapi.io/api/v1/todos/${id}`
      : 'https://65fab81b3909a9a65b1b4dc5.mockapi.io/api/v1/todos';
    
    const method = id ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task })
      });

      if (response.ok) {
        const json = await response.json();
        dispatch({ 
          type: id ? 'EDIT_TODO' : 'ADD_TODO',
          payload: json
        });
        navigation.navigate('Screen_02');
      }
    } catch (error) {
      console.error('Error submitting task:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
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
        <Text style={{ fontSize: 30, fontWeight: 'bold', textTransform: 'uppercase' }}>
          {id ? 'Chỉnh sửa công việc' : 'Thêm công việc mới'}
        </Text>
        <View style={{ flexDirection: 'row', width: "100%", gap: 20, alignItems: 'center', borderWidth: 1, borderColor: '#171A1F', borderRadius: 10, height: 50, paddingHorizontal: 20 }}>
          <Feather name="list" size={24} color="green" />
          <TextInput 
            placeholder='Nhập công việc của bạn'
            style={{ borderWidth: 0, width: "90%" }}
            value={task}
            onChangeText={setTask}
          />
        </View>
        <TouchableOpacity 
          onPress={handleSubmit}
          style={{ backgroundColor: "#00BDD6", width: 200, height: 50, paddingHorizontal: 30, paddingVertical: 15, borderRadius: 10, marginVertical: 30, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: 'bold', textTransform: "uppercase" }}>
              {id ? 'Cập nhật' : 'Hoàn thành'}
            </Text>
            <Feather name="arrow-right" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <View>
          <Image source={require('../../assets/note.svg')} style={{ width: 200, height: 200 }} />
        </View>
      </View>
    </View>
  );
};

export default Screen_03;