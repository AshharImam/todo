import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MarkCompleteAction = () => {
  return (
    <View
      style={{
        width: 60,
        backgroundColor: '#4CDA64',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon name="check" color="#fff" size={20} />
    </View>
  );
};

export default MarkCompleteAction;

const styles = StyleSheet.create({});
