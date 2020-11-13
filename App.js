/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Login from './src/Screens/Login';
import Todo from './src/Screens/Todo';
import Add from './src/Screens/Add';
import Account from './src/Screens/Account';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#4CDA64',
      inactiveTintColor: '#a3a3a3',
    }}>
    <Tab.Screen
      name="List"
      component={Todo}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="list-alt" color={color} size={size} />
        ),
        title: '',
      }}
    />
    <Tab.Screen
      name="Add"
      component={Add}
      options={{
        tabBarIcon: ({color, size}) => (
          <Entypo name="plus" color={color} size={35} />
        ),
        title: '',
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarIcon: ({color, size}) => (
          <Entypo name="user" color={color} size={size} />
        ),
        title: '',
      }}
    />
  </Tab.Navigator>
);
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Login" component={Login} />

    <Stack.Screen name="Home" component={TabNavigator} />
  </Stack.Navigator>
);

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
