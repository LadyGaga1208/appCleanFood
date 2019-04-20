import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Header, Icon } from "react-native-elements";
import * as variables from "../../config/variables";
import * as images from "../../assets/images";

export default class Catalogues extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          centerComponent={{
            text: "Danh muc",
            style: {
              color: variables.COLOR.white,
              fontWeight: "500",
              fontSize: variables.FONTSIZE.large
            }
          }}
          containerStyle={{
            backgroundColor: variables.mainColor
          }}
          statusBarProps={{
            translucent: true
          }}
        />
        <View style={{ backgroundColor: variables.backgroundColor, flex: 1 }}>
          <TouchableOpacity style={{}}>
            <View
              style={{
                backgroundColor: variables.COLOR.white,
                width: "100%",
                height: 50,
                borderRadius: 0,
                paddingHorizontal: 10,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                borderBottomWidth: 0.5,
                borderBottomColor: "gray",
                marginTop: 10
              }}
            >
              <Text style={{ color: variables.COLOR.black }}>Rau, cu, qua</Text>
              <Image source={images.arrow} style={{ width: 18, height: 18 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <View
              style={{
                backgroundColor: variables.COLOR.white,
                width: "100%",
                height: 50,
                borderRadius: 0,
                paddingHorizontal: 10,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                borderBottomWidth: 0.5,
                borderBottomColor: "gray"
              }}
            >
              <Text style={{ color: variables.COLOR.black }}>
                Thit heo, bo ,ga
              </Text>
              <Image source={images.arrow} style={{ width: 18, height: 18 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <View
              style={{
                backgroundColor: variables.COLOR.white,
                width: "100%",
                height: 50,
                borderRadius: 0,
                paddingHorizontal: 10,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                borderBottomWidth: 0.5,
                borderBottomColor: "gray"
              }}
            >
              <Text style={{ color: variables.COLOR.black }}>Thuy hai san</Text>
              <Image source={images.arrow} style={{ width: 18, height: 18 }} />
            </View>
          </TouchableOpacity>
          <View style={{ height: 10, width: "100%" }} />
          <TouchableOpacity style={{}}>
            <View
              style={{
                backgroundColor: variables.COLOR.white,
                width: "100%",
                height: 50,
                borderRadius: 0,
                paddingHorizontal: 10,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                borderBottomWidth: 0.5,
                borderBottomColor: "gray"
              }}
            >
              <Text style={{ color: variables.COLOR.black }}>San pham moi</Text>
              <Image source={images.arrow} style={{ width: 18, height: 18 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <View
              style={{
                backgroundColor: variables.COLOR.white,
                width: "100%",
                height: 50,
                borderRadius: 0,
                paddingHorizontal: 10,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                borderBottomWidth: 0.5,
                borderBottomColor: "gray"
              }}
            >
              <Text style={{ color: variables.COLOR.black }}>
                San pham ban chay
              </Text>
              <Image source={images.arrow} style={{ width: 18, height: 18 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <View
              style={{
                backgroundColor: variables.COLOR.white,
                width: "100%",
                height: 50,
                borderRadius: 0,
                paddingHorizontal: 10,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                borderBottomWidth: 0.5,
                borderBottomColor: "gray"
              }}
            >
              <Text style={{ color: variables.COLOR.black }}>
                San pham yeu thich
              </Text>
              <Image source={images.arrow} style={{ width: 18, height: 18 }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
