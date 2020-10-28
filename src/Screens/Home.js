import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectUser} from '../features/userSlice';

const Home = () => {
  const user = useSelector(selectUser);
  return (
    <View>
      <Text>{user}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
