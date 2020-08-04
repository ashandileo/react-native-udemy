import React from 'react';
import { View, Image, StyleSheet, Button, Text } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

import colors from '../constants/colors';

const GameOverScreen = ({ onRestart, roundsNumber, userNumber }) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image 
          fadeDuration={500}
          source={require('../assets/success.png')} // for local image
          // source={{uri: 'https://theclassicwanderer.com/wp-content/uploads/2019/05/The-Classic-Wanderer-Gunung-Gede-Cibodas-32.jpg'}}
          style={styles.image} 
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={{marginBottom: 10, textAlign: 'center', fontSize: 20}}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={onRestart}>
        New Game
      </MainButton>
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
    marginTop: 20
  },
  image: {
    width: '100%',
    height: '100%'
  },
  highlight: {
    color: colors.primary,
    fontFamily: 'open-sans-bold',
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 20
  }
});

export default GameOverScreen;