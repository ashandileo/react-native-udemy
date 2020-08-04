import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

import colors from '../constants/colors';

const MainButton = ({ children, onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 18
  }
});

export default MainButton;