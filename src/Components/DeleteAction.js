import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DeleteAction = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          width: 60,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AntDesign name="delete" size={20} color="#fff" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DeleteAction;

const styles = StyleSheet.create({});
