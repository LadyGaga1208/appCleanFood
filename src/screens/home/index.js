import React, { PureComponent } from "react";
import { Text, View, ScrollView } from "react-native";
import { Header, Button, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import ItemNewProduct from "./ItemNewProduct";
import BannerSlide from "./BannerSlide";
import ItemCatalogues from "./ItemCatalogues";
import * as variables from "../../config/variables";
import { ItemProduct } from "../../components";

export default class Home extends PureComponent {
  static navigationOptions = {
    header: null
  };
  renderCenterComponent = () => (
    <Button
      onPress={this.navigationSearch}
      title="Tìm kiếm..."
      buttonStyle={{
        width: 0.9 * variables.width,
        backgroundColor: variables.COLOR.white,
        justifyContent: "flex-start"
      }}
      titleStyle={{
        color: "gray"
      }}
      icon={
        <Icon
          style={{ marginRight: 10 }}
          size={19}
          color={variables.mainColor}
          name="search"
        />
      }
    />
  );
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: variables.COLOR.white }}>
        <Header
          centerComponent={this.renderCenterComponent()}
          containerStyle={{
            backgroundColor: variables.mainColor
          }}
          statusBarProps={{
            translucent: true
          }}
        />
        <ScrollView>
          <BannerSlide />
          <View
            style={{
              paddingHorizontal: variables.PadNomarl,
              backgroundColor: variables.backgroundColor,
              flex: 1
            }}
          >
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <View
                style={{
                  width: 5,
                  height: 20,
                  backgroundColor: variables.mainColor
                }}
              />
              <Text style={{ marginLeft: 5 }}>Sản phẩm mới</Text>
            </View>
            <ItemNewProduct />
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <View
                style={{
                  width: 5,
                  height: 20,
                  backgroundColor: variables.mainColor
                }}
              />
              <Text style={{ marginLeft: 5 }}>Danh mục</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <ItemCatalogues />
              <ItemCatalogues />
              <ItemCatalogues />
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <View
                style={{
                  width: 5,
                  height: 20,
                  backgroundColor: variables.mainColor
                }}
              />
              <Text style={{ marginLeft: 5 }}>Có thể bạn muốn mua</Text>
            </View>
            <ItemProduct
              onPress={() => {
                console.log("hahaha");
                this.props.navigation.navigate("ProductDetail");
              }}
            />
            <View style={{ height: 50 }} />
          </View>
        </ScrollView>
      </View>
    );
  }
  navigationSearch = () => {
    console.log("object")
    this.props.navigation.navigate("Search");
  }
}
