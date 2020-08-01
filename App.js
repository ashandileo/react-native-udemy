import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/Goalnput';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = enteredGoal => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), text: enteredGoal }
    ]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput onAdd={addGoalHandler} visible={isAddMode} onCancel={cancelGoalAdditionHandler} />
      <FlatList 
        keyExtractor={item => item.id} 
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem 
            onDelete={removeGoalHandler} 
            title={itemData.item.text}
            id={itemData.item.id}
          />
        )}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:40
  }
});

export default App;