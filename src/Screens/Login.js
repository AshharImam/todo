import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import AppButton from '../Components/AppButton';
import AppTextInput from '../Components/AppTextInput';
import Screen from '../Components/Screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {login} from '../features/userSlice';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(login(user));
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
        color="#4CDA64"
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
