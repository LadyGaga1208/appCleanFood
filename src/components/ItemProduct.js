import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Image, Rating, Icon } from "react-native-elements";
import * as variables from "../config/variables";

export class ItemProduct extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          width: "40%",
          height: 225,
          backgroundColor: variables.COLOR.white,
          borderRadius: 15,
          elevation: 3
        }}
        onPress={this.props.onPress}
      >
        <View
          style={{
            height: "63%",
            width: "100%",
            padding: 2
          }}
        >
          <Image
            source={{
              uri:
                "http://hstatic.net/808/1000144808/1000194018/slideshow_image_5.jpg?v=1487"
            }}
            style={{
              height: "100%",
              width: "100%",
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15
            }}
          />
        </View>
        <View style={{ paddingHorizontal: 5, marginTop: 5 }}>
          <Text style={{ fontSize: variables.FONTSIZE.medium, color: "black" }}>
            Rau cai luoc
          </Text>
          <Text style={{ color: variables.mainColor, fontWeight: "500" }}>
            40.000đ/kg
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between"
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Rating
                type="star"
                readonly
                startingValue={5}
                imageSize={10}
                style={{
                  marginTop: 2
                }}
              />
              <Text style={{ color: "gray", fontSize: 10 }}>(12)</Text>
            </View>
            <Text style={{ color: "black", fontSize: 10 }}>đã bán 12kg</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
