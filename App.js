import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState();

  const startGameNumber = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {userNumber ? <GameScreen userChoice={userNumber} /> : <StartGameScreen onStartGame={startGameNumber} />}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

export default App;