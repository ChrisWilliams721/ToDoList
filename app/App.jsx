/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';


function App() {
  return (
    <SafeAreaView>
      <ToDoList/>
      <ToDoForm/>
    </SafeAreaView>
  );
}


export default App;
