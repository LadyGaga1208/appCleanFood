import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Header } from "react-native-elements";
import * as variables from "../config/variables";

import * as images from "../assets/images";

export default class TMHeader extends Component {
  render() {
    return (
      <Header
        centerComponent={{ text: this.props.title, style: { color: "#fff" } }}
        leftComponent={this.renderLeftComponent()}
        containerStyle={{
          backgroundColor: variables.mainColor
        }}
        statusBarProps={{
          translucent: true
        }}
      />
    );
  }

  renderLeftComponent = () => {
    return (
      <TouchableOpacity>
        <View>
          <Image source={images.back} style={{ tintColor: "#ffffff" }} />
        </View>
      </TouchableOpacity>
    );
  };
}
