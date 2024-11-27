import { StyleSheet, TextInput, View, Button } from 'react-native';
import React from 'react';


const ToDoForm = ({addTask}) => {
  console.log(addTask);
  const [textTask, setTextTask] = React.useState('');
  
  return (
    <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={(text) => setTextTask(text)}
          value={textTask} 
        />
        <Button title="Add" onPress={() => addTask(textTask)} />
      </View>
  );
};

export default ToDoForm;

const styles = StyleSheet.create({

    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
      },
});