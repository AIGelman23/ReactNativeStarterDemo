import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageScore={1}
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="Beach"
        imageScore={2}
        imageSource={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        title="Mountain"
        imageScore={3}
        imageSource={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
