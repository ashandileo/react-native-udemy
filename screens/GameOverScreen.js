import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const GameOverScreen = ({ onRestart, roundsNumber, userNumber }) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/success.png')} 
          style={styles.image} 
          resizeMode="cover"
        />
      </View>
      <BodyText>Number of rounds: {roundsNumber}</BodyText>
      <BodyText style={{marginBottom: 12}}>Number was: {userNumber}</BodyText>
      <Button title="New Game" onPress={onRestart} />
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 20
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default GameOverScreen;