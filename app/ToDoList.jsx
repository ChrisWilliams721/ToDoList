import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import React from 'react';

const ToDoList = ({tasks}) => {
  return (
    <ScrollView style={styles.container}>
      {tasks.map((task, index) => (
        <View key={index} style={styles.incompleteTask}>
          <Text style={styles.taskText}>{task}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
      },
      completed: {
        backgroundColor: '#e0e0e0',
      },
      taskText: {
        fontSize: 16,
      },
});