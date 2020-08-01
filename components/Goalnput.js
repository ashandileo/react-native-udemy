import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = ({ onAdd, visible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    onAdd(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={visible} animationType="slide" >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="My Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={onCancel}/>
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler}/>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%', 
    padding: 10, 
    borderBottomColor: 'black', 
    borderWidth: 1,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;