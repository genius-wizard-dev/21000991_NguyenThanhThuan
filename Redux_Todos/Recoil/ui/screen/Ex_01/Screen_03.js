import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRecoilValue } from "recoil";
import { loadingState } from "../../store/atoms";
import Header from "./header";
import { useTodoActions } from "../../store/hooks";
import { todoByIdSelector } from "../../store/selectors";

const Screen_03 = ({ route }) => {
  const navigation = useNavigation();
  const { addTodo, editTodo } = useTodoActions();
  const getTodoById = useRecoilValue(todoByIdSelector);
  const isLoading = useRecoilValue(loadingState);
  const [task, setTask] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    if (route.params?.id) {
      setId(route.params.id);
      const todo = getTodoById(route.params.id);
      if (todo) {
        setTask(todo.task);
      }
    }
  }, [route.params]);

  const handleSubmit = async () => {
    if (task.length === 0) return;

    try {
      if (id) {
        await editTodo({ id, task });
      } else {
        await addTodo({ task });
      }
      navigation.navigate("Screen_02");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#00BDD6" />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 80,
        paddingHorizontal: 20,
      }}
    >
      <Header reverse={true} />
      <View
        style={{
          marginBottom: "auto",
          marginTop: 50,
          flexDirection: "column",
          gap: 30,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {id ? "Chỉnh sửa công việc" : "Thêm công việc mới"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 20,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#171A1F",
            borderRadius: 10,
            height: 50,
            paddingHorizontal: 20,
          }}
        >
          <Feather name="list" size={24} color="green" />
          <TextInput
            placeholder="Nhập công việc của bạn"
            style={{ borderWidth: 0, width: "90%" }}
            value={task}
            onChangeText={setTask}
          />
        </View>
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            backgroundColor: "#00BDD6",
            width: 200,
            height: 50,
            paddingHorizontal: 30,
            paddingVertical: 15,
            borderRadius: 10,
            marginVertical: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              {id ? "Cập nhật" : "Hoàn thành"}
            </Text>
            <Feather name="arrow-right" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <View>
          <Image
            source={require("../../assets/note.svg")}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </View>
    </View>
  );
};

export default Screen_03;
