import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
  const { style } = props;

  return <TextInput {...props} style={{...styles.input, ...style}} />
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10  
  }
});

export default Input;