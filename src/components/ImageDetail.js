import React from "react";
import { Image, View, Text, StyleSheet, ImagePropTypes } from "react-native";

const ImageDetail = ({ imageSource, title, imageScore }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {imageScore}</Text>
    </View>
  );
};

styles = StyleSheet.create({});

export default ImageDetail;
