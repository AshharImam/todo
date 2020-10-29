import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const AppMultiLineInput = ({onChangeText, style, value}) => {
  return (
    <TextInput
      value={value}
      multiline
      placeholder="What do you need to do?"
      style={[styles.input, style]}
      onChangeText={onChangeText}
      numberOfLines={3}
      underlineColorAndroid="transparent"
    />
  );
};

export default AppMultiLineInput;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderColor: '#d9d9d9',
    borderWidth: 1,
    fontSize: 16,
    height: '30%',
    textAlignVertical: 'top',
  },
});
