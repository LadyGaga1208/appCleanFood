import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
import * as variables from '../config/variables';

import * as images from '../assets/images';

export default class TMHeader extends Component {
  renderLeftComponent = () => (
    <TouchableOpacity onPress={this.props.onPress}>
      <View>
        <Image source={images.back} style={{ tintColor: '#ffffff', width: 24, height: 24 }} />
      </View>
    </TouchableOpacity>
  );
  render() {
    return (
      <Header
        centerComponent={{ text: this.props.title, style: { color: variables.COLOR.white, fontWeight: '500', fontSize: variables.FONTSIZE.large } }}
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


}
