import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar
} from "react-native";

import * as variables from "../../config/variables";
import * as images from "../../assets/images";

export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <View style={{ flex: 1, backgroundColor: variables.backgroundColor }}>
          <View
            style={{
              backgroundColor: variables.mainColor,
              height: 120,
              width: "100%",
              alignItems: "center",
              paddingHorizontal: 10
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: variables.COLOR.white,
                fontWeight: "500",
                marginTop: 5
              }}
            >
              Tài khoản
            </Text>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal: 10
              }}
            >
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  borderColor: variables.COLOR.white,
                  borderWidth: 5,
                  marginTop: 10
                }}
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    overflow: "hidden",
                    borderRadius: 30
                  }}
                  source={{
                    uri:
                      "https://i.pinimg.com/564x/c7/1a/15/c71a15ee0afae219976c63b1e57bd4bf.jpg?b=t"
                  }}
                />
              </View>
              <Text
                style={{
                  color: variables.COLOR.white,
                  fontSize: 14,
                  marginTop: 10,
                  marginLeft: 10
                }}
              >
                longdoanbk.94@gmail.com
              </Text>
            </View>
          </View>
          <TouchableOpacity style={[styles.wrapItem, { marginTop: 10 }]}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={images.note}
                style={[styles.iconStyle, { tintColor: "#06409e" }]}
              />
              <Text style={styles.textStyle}>Đơn hàng</Text>
            </View>
            <Image source={images.arrow} style={{ width: 18, height: 18 }} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapItem}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={images.settings}
                style={[styles.iconStyle, { tintColor: "#059e72" }]}
              />
              <Text style={styles.textStyle}>Thiết lập tài khoản</Text>
            </View>
            <Image source={images.arrow} style={{ width: 18, height: 18 }} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapItem}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={images.information}
                style={[styles.iconStyle, { tintColor: "#9e0456" }]}
              />
              <Text style={styles.textStyle}>Về chúng tôi</Text>
            </View>
            <Image source={images.arrow} style={{ width: 18, height: 18 }} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  wrapItem: {
    width: "100%",
    height: 50,
    backgroundColor: variables.COLOR.white,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    justifyContent: "space-between"
  },
  iconStyle: {
    width: 24,
    height: 24
  },
  textStyle: {
    fontSize: 14,
    color: "black",
    marginLeft: 10
  }
});
