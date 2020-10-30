import React from 'react';
import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import DeleteAction from '../Components/DeleteAction';
import Header from '../Components/Header';
import MarkCompleteAction from '../Components/MarkCompleteAction';
import Screen from '../Components/Screen';
import TodoItem from '../Components/TodoItem';
import {selectTodo, deleteTodo, completeTodo} from '../features/todoSlice';

const Todo = () => {
  const todos = useSelector(selectTodo);
  const dipatch = useDispatch();

  const handleDelete = (id) => {
    dipatch(deleteTodo(id));
  };

  const handleComplete = (id) => {
    dipatch(completeTodo(id));
  };

  return (
    <>
      <Header title="Todo" />
      <Screen style={styles.todoContainer}>
        <FlatList
          data={todos}
          keyExtractor={(item) => {
            console.log('item KEY', item.id);
            return item.id.toString();
          }}
          renderItem={({item}) => (
            <TodoItem
              title={item.title}
              due={item.due}
              color={item.color}
              completed={item.completed}
              renderRightActions={() => (
                <DeleteAction
                  onPress={() => {
                    Alert.alert('Delete', 'Do you really want to delete?', [
                      {
                        text: 'Delete',
                        onPress: () => handleDelete(),
                      },
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                      },
                    ]);
                  }}
                />
              )}
              renderLeftActions={() => (
                <MarkCompleteAction onPress={() => handleComplete(item.id)} />
              )}
            />
          )}
        />
      </Screen>
    </>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todoContainer: {
    padding: 10,
  },
});
