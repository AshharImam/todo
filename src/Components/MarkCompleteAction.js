import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MarkCompleteAction = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          width: 60,
          backgroundColor: '#4CDA64',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="check" color="#fff" size={20} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MarkCompleteAction;

const styles = StyleSheet.create({});
