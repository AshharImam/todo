import React, {useState} from 'react';
import {Keyboard, Platform, StyleSheet, Text, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AppButton from '../Components/AppButton';
import AppMultiLineInput from '../Components/AppMultiLineInput';
import AppTag from '../Components/AppTag';
import Header from '../Components/Header';
import Screen from '../Components/Screen';
import AppTimeBox from '../Components/AppTimeBox';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, selectTodo} from '../features/todoSlice';

const Add = () => {
  const [selected, setSelected] = useState('dodgerblue');
  const [text, setText] = useState(null);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);

  const multiLineTextHandle = (text) => {
    // console.log(text);
    setText(text);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const formatDate = (date, time) => {
    return `${new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      time.getHours(),
      time.getMinutes(),
    )}`;
  };

  const onChange = (event, selectedValue) => {
    setShow(Platform.OS === 'ios');
    if (mode == 'date') {
      const currentDate = selectedValue || new Date();
      setDate(currentDate);
      setMode('time');
      setShow(Platform.OS !== 'ios'); // to show the picker again in time mode
    } else {
      const selectedTime = selectedValue || new Date();
      setTime(selectedTime);
      setShow(Platform.OS === 'ios');
      setMode('date');
    }
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const handleSubmit = () => {
    const id = todos.length === 0 ? 0 : todos[0].id + 1;

    dispatch(
      addTodo({
        id: id,
        title: text,
        due: formatDate(date, time),
        color: selected,
      }),
    );
    Keyboard.dismiss();
    setText('');
    setSelected('dodgerblue');
  };
  return (
    <>
      <Header title="Add" />
      <Screen style={styles.container}>
        <AppMultiLineInput value={text} onChangeText={multiLineTextHandle} />
        <AppTimeBox
          placeholder="When is it due?"
          value={formatDate(date, time).toString()}
          style={styles.textInput}
          onPress={showDatepicker}
        />

        {show && (
          <DateTimePicker
            onTouchCancel={() => setShow(false)}
            mode={mode}
            value={date}
            onChange={onChange}
          />
        )}
        <View style={styles.tagContainer}>
          <AppTag
            onPress={() => setSelected('dodgerblue')}
            color="dodgerblue"
            selected={selected === 'dodgerblue' ? true : false}
          />
          <AppTag
            onPress={() => setSelected('green')}
            color="green"
            selected={selected === 'green' ? true : false}
          />
          <AppTag
            onPress={() => setSelected('lightpink')}
            color="lightpink"
            selected={selected === 'lightpink' ? true : false}
          />
          <AppTag
            onPress={() => setSelected('orchid')}
            color="orchid"
            selected={selected === 'orchid' ? true : false}
          />
          <AppTag
            onPress={() => setSelected('orange')}
            color="orange"
            selected={selected === 'orange' ? true : false}
          />
        </View>
        <AppButton style={styles.button} title="Add" onPress={handleSubmit} />
      </Screen>
    </>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textInput: {
    marginVertical: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    backgroundColor: '#4CDA64',
    marginTop: 15,
  },
});
