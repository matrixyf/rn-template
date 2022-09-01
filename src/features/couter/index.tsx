import React from 'react';
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { decrement, incrementAsync } from "../../store/counterSlice";
import styles from './styles';

export default function Counter() {

  const count = useSelector((state: RootState) => state.counter.count);
  const [step, setStep] = useState('1');
  const dispatch = useDispatch();

  function dec() {
    decrement();
  }

  function inc(s = 1) {
    dispatch({
      type: 'counter/increment',
      payload: {
        step: s,
      },
    });
  }

  return (
    <View style={styles.container}>
      <Text
        onPress={dec}
      >
        -
      </Text>
      <Text>
        {count}
      </Text>
      <Text
        onPress={() => {
          inc();
        }}
      >
        +
      </Text>
      <Text
        onPress={() => {
          inc(Number(step) || 1);
        }}
      >
        increment by
      </Text>
      <TextInput
        value={step}
        onChangeText={(text) => {
          setStep(text);
        }}
      />
      <Text
        onPress={() => {
          incrementAsync(step);
        }}
      >
        increment async
      </Text>
    </View>
  );
}
