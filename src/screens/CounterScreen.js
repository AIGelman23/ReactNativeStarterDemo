import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  // array destructuring or pulling
  // elements out of an array
  // const colors = ['red', 'green'];
  // colors[0] = "red" or colors[1] = "green"
  // const [colorOne, colorTwo] = colors;
  // colorOne = "red"
  // colorTwo = "green"
  // any time we want to update or change piece of
  // state we don't want to modify the counter directly
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // don't do this!
          //counter++;
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          // don't do this!
          //counter--;
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
