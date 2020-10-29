import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const AppTag = ({selected, color, onPress}) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      selected={selected}
      style={[
        styles.tag,
        {backgroundColor: color},
        {opacity: !selected ? 0.3 : 1},
      ]}
    />
  );
};

export default AppTag;

const styles = StyleSheet.create({
  tag: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});
