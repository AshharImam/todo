import React, {useEffect, useState} from 'react';
import {Keyboard, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppButton from '../Components/AppButton';
import AppTextInput from '../Components/AppTextInput';
import Screen from '../Components/Screen';

import {login} from '../features/userSlice';
import {useDispatch} from 'react-redux';
import {loadData} from '../features/todoSlice';

const Login = ({navigation}) => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  const setAsyncUser = async (user) => {
    try {
      await AsyncStorage.setItem('user', user);
    } catch (error) {}
  };

  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== 'null' && value !== null) {
        console.log(value);
        dispatch(login(value));
        navigation.navigate('Home');
      }
    } catch (error) {}
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('todos');
      dispatch(loadData(jsonValue != null ? JSON.parse(jsonValue) : []));
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getUser();
    getData();
  }, []);

  const loginHandler = () => {
    Keyboard.dismiss();
    dispatch(login(user));
    setAsyncUser(user);
    setUser(null);
    navigation.navigate('Home');
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoBox}>
          <Icon name="check" color="#fff" size={50} />
        </View>
        <Text style={styles.logoHeading}>Todo</Text>
      </View>
      <AppTextInput
        placeholder="Name"
        value={user}
        onChangeText={(text) => setUser(text)}
      />
      <AppButton
        disabled={user ? false : true}
        onPress={loginHandler}
        style={styles.button}
        title="Login"
      />
    </Screen>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'flex-end',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBox: {
    backgroundColor: '#4CDA64',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  logoHeading: {
    fontSize: 22,
    fontWeight: '800',
  },
  button: {
    backgroundColor: '#4CDA64',
    marginTop: 5,
  },
});
