import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  ScrollView, 
  StyleSheet
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from './header';

const Screen_02 = () => {
  const navigation = useNavigation();
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    navigation.navigate('Screen_03', { setTodos: setTodos, todos: todos });
  };

  return (
    <KeyboardAvoidingView
    
      style={styles.container}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        <Header />
        
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Feather name="search" size={24} color="black" />
            <TextInput placeholder='Search' style={styles.searchInput} />
          </View>
        </View>
        
        <View style={styles.todoList}>
          {todos.map((todo, index) => (
            <View key={index} style={styles.todoItem}>
              <Feather name="check-square" size={24} color="green" />
              <Text style={styles.todoText}>{todo}</Text>
              <Feather name="edit" size={24} color="red" />
            </View>
          ))}
        </View>
      </ScrollView>
      
      <TouchableOpacity onPress={handleAddTodo} style={styles.addButton}>
        <Feather name="plus" size={30} color="white" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 20,
    height: "100%"
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  searchContainer: {
    marginTop: 50,
  },
  searchBar: {
    flexDirection: 'row',
    width: '100%',
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
  todoList: {
    flexGrow: 1,
    marginTop: 50,
    marginBottom: 10
  },
  todoItem: {
    flexDirection: 'row',
    width: '100%',
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
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    width: 70,
    height: 70,
    backgroundColor: '#00BDD6',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen_02;