/**
 * My To Do List App
 *
 * @format
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import ToDoForm from "./src/components/ToDoForm";
import ToDoList from "./src/components/ToDoList";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/native-stack";


export default function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
      </SafeAreaView>
    </NavigationContainer>
  );
};
