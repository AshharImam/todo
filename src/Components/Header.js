import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#4CDA64',
    height: '15%',
    padding: 15,
    justifyContent: 'flex-end',
  },
  title: {
    color: '#fff',
    fontSize: 35,
    fontWeight: '800',
  },
});
