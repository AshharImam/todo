import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
const TodoItem = ({
  title,
  due,
  color,
  renderRightActions,
  renderLeftActions,
  completed,
}) => {
  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}>
      <TouchableHighlight
        onPress={() => console.log('pressed')}
        underlayColor="#eee">
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: color,
              width: 15,
              height: 15,
              borderRadius: 8,
            }}
          />
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.title,
                completed && {
                  color: '#a9a9a9',
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid',
                  textDecorationColor: '#a9a9a9',
                },
              ]}>
              {title}
            </Text>
            <Text style={[styles.subTitle, completed && {color: '#a9a9a9'}]}>
              Due {due}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding: 5,
    marginVertical: 2,
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
  },
  subTitle: {
    fontSize: 13,
    fontWeight: '100',
  },
});
