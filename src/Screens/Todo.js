import React, {useState} from 'react';
import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import DeleteAction from '../Components/DeleteAction';
import Header from '../Components/Header';
import MarkCompleteAction from '../Components/MarkCompleteAction';
import Screen from '../Components/Screen';
import TodoItem from '../Components/TodoItem';
import {selectTodo, deleteTodo} from '../features/todoSlice';

const Todo = () => {
  const todos = useSelector(selectTodo);
  const dipatch = useDispatch();
  const handleDelete = (id) => {
    dipatch(deleteTodo(id));
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
              renderRightActions={() => (
                <DeleteAction
                  onPress={() => {
                    console.log('item DELETE', item);
                    handleDelete(item.id);
                  }}
                />
              )}
              renderLeftActions={MarkCompleteAction}
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
