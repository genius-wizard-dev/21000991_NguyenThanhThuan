import React, { useEffect, useState, useCallback } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  FlatList, 
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from './header';

const Screen_02 = () => {
  const navigation = useNavigation();
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchTodos = async() => {
    setIsLoading(true);
    await fetch('https://65fab81b3909a9a65b1b4dc5.mockapi.io/api/v1/todos', {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Lỗi khi tải danh sách công việc');
    }).then(tasks => {
      setTodos(tasks);
      setFilteredTodos(tasks);
    }).catch(error => {
      console.error('Lỗi:', error);
    }).finally(() => {
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    const filtered = todos.filter(todo => 
      todo.task.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTodos(filtered);
  }, [searchQuery, todos]);

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const handleAddTodo = () => {
    navigation.navigate('Screen_03');
  };

  const handleEditTodo = (id) => {
    navigation.navigate('Screen_03', { id: id });
  };

  const handleDeleteTodo = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://65fab81b3909a9a65b1b4dc5.mockapi.io/api/v1/todos/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const deletedTask = await response.json();
        console.log('Công việc đã được xóa thành công:', deletedTask);
        await fetchTodos();
      } else {
        console.log('Có lỗi khi xóa công việc');
      }
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchTodos();
  };

  const renderTodoItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Feather name="check-square" size={24} color="green" />
      <Text style={styles.todoText}>{item.task}</Text>
      <View style={styles.actionButtons}>
        <TouchableOpacity onPress={() => handleEditTodo(item.id)} style={styles.editButton}>
          <Feather name="edit" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTodo(item.id)} style={styles.deleteButton}>
          <Feather name="trash" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Header />
      
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Feather name="search" size={24} color="black" />
          <TextInput 
            placeholder='Tìm kiếm' 
            style={styles.searchInput} 
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleAddTodo} style={styles.actionButton}>
          <Feather name="plus" size={24} color="white" />
          <Text style={styles.buttonText}>Thêm</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleRefresh} style={styles.actionButton}>
          <Feather name="refresh-cw" size={24} color="white" />
          <Text style={styles.buttonText}>Làm mới</Text>
        </TouchableOpacity>
      </View>
      
      {isLoading ? (
        <ActivityIndicator size="large" color="#00BDD6" style={styles.loader} />
      ) : (
        <FlatList
          data={filteredTodos}
          renderItem={renderTodoItem}
          keyExtractor={item => item.id.toString()}
          style={styles.todoList}
          contentContainerStyle={styles.todoListContent}
        />
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  searchContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#171A1F',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00BDD6',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    width: '48%',
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  todoList: {
    flex: 1,
  },
  todoListContent: {
    paddingBottom: 20,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 25,
    height: 50,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    marginHorizontal: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    padding: 8,
  },
  deleteButton: {
    backgroundColor: '#F44336',
    borderRadius: 15,
    padding: 8,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen_02;