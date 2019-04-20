import React, { Component } from "react";
import { Text, View } from "react-native";
import TMHeader from "../../components/Header";

export default class ProductDetail extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TMHeader />
        <Text> textInComponent </Text>
      </View>
    );
  }
}
