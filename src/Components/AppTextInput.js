import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const AppTextInput = ({style, ...args}) => {
  return <TextInput {...args} style={[styles.inputBox, style]} />;
};

export default AppTextInput;

const styles = StyleSheet.create({
  inputBox: {
    width: '100%',
    borderColor: '#d9d9d9',
    borderWidth: 1,
    fontSize: 16,
  },
});
