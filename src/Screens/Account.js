import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import AppButton from '../Components/AppButton';
import Header from '../Components/Header';
import Screen from '../Components/Screen';
import {selectUser} from '../features/userSlice';

const Account = () => {
  const user = useSelector(selectUser);
  return (
    <>
      <Header title={user} />
      <Screen style={styles.container}>
        <AppButton title="Logout" style={styles.logoutButton} color="red" />
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
