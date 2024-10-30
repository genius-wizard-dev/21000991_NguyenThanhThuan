import { Feather } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import { filteredTodosSelector } from "../../store/selectors";
import { useTodoActions } from "../../store/hooks";
import { loadingState, searchQueryState } from "../../store/atoms";
import Header from "./header";

const Screen_02 = () => {
  const navigation = useNavigation();
  const { fetchTodos, deleteTodo } = useTodoActions();
  const isLoading = useRecoilValue(loadingState);
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);
  const filteredTodos = useRecoilValue(filteredTodosSelector);

  useFocusEffect(
    useCallback(() => {
      fetchTodos();
    }, [])
  );

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const handleAddTodo = () => {
    navigation.navigate("Screen_03");
  };

  const handleEditTodo = (id) => {
    navigation.navigate("Screen_03", { id });
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
  };

  const renderTodoItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Feather name="check-square" size={24} color="green" />
      <Text style={styles.todoText}>{item.task}</Text>
      <View style={styles.actionButtons}>
        <TouchableOpacity
          onPress={() => handleEditTodo(item.id)}
          style={styles.editButton}
        >
          <Feather name="edit" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDeleteTodo(item.id)}
          style={styles.deleteButton}
        >
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
            placeholder="Tìm kiếm"
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

        <TouchableOpacity
          onPress={() => fetchTodos()}
          style={styles.actionButton}
        >
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
          keyExtractor={(item) =>
            item.id ? item.id.toString() : Math.random().toString()
          }
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
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#171A1F",
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00BDD6",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    width: "48%",
  },
  buttonText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  todoList: {
    flex: 1,
  },
  todoListContent: {
    paddingBottom: 20,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    borderRadius: 25,
    height: 50,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    marginHorizontal: 10,
  },
  actionButtons: {
    flexDirection: "row",
    gap: 10,
  },
  editButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 15,
    padding: 8,
  },
  deleteButton: {
    backgroundColor: "#F44336",
    borderRadius: 15,
    padding: 8,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Screen_02;
