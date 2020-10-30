import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AppButton from '../Components/AppButton';
import Header from '../Components/Header';
import Screen from '../Components/Screen';
import {loadData} from '../features/todoSlice';
import {selectUser, logout} from '../features/userSlice';
import {LogoutUser} from '../Methods/userMethods';

const Account = ({navigation}) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const setAsyncUser = async (user) => {
    try {
      console.log('ACCOUNT_LOGOUT>>>', user);
      await AsyncStorage.setItem('user', user);
    } catch (error) {}
  };

  return (
    <>
      <Header title={user} />
      <Screen style={styles.container}>
        <AppButton
          title="Logout"
          style={styles.logoutButton}
          color="red"
          onPress={() => {
            setAsyncUser('null');
            dispatch(logout());
            dispatch(loadData([]));
            navigation.navigate('Login');
          }}
        />
      </Screen>
    </>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'flex-end',
  },

  logoutButton: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'red',
  },
});
