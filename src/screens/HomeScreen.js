import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.menuHeader}>Demo Menu</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
        style={styles.buttonStyle}
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
        style={styles.buttonStyle}
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image Demo"
        style={styles.buttonStyle}
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Demo"
        style={styles.buttonStyle}
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Demo"
        style={styles.buttonStyle}
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Square Demo"
        style={styles.buttonStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuHeader: {
    marginVertical: 10,
    fontSize: 40,
  },
  buttonStyle: {
    fontSize: 30,
  },
});

export default HomeScreen;
