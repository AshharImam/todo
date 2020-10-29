import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

const AppTimeBox = ({value, color, style, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[style, styles.inputBox]}>
        <Text style={[styles.text, {color: color}]}>{value}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppTimeBox;

const styles = StyleSheet.create({
  inputBox: {
    width: '100%',
    borderColor: '#d9d9d9',
    borderWidth: 1,
    height: 45,
    justifyContent: 'center',
    padding: 5,
  },
  text: {
    fontSize: 16,
  },
});
