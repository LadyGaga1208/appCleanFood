import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Image, Rating, Icon } from 'react-native-elements';
import * as variables from '../config/variables';

export class ItemProduct extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onPress}
      >
        <View
          style={styles.wrapImage}
        >
          <Image
            source={{
              uri:
                'http://hstatic.net/808/1000144808/1000194018/slideshow_image_5.jpg?v=1487'
            }}
            style={styles.img}
          />
        </View>
        <View style={styles.wrapinfomation}>
          <Text style={{ fontSize: variables.FONTSIZE.medium, color: 'black' }}>
            Rau cai luoc
          </Text>
          <Text style={{ color: variables.COLOR.orange, fontSize: 14 }}>Tomita Bách Khoa</Text>
          <Text style={{ color: variables.mainColor, fontWeight: '500' }}>
            40.000đ/kg
          </Text>
          <View
            style={styles.wrapRate}
          >
            <View style={{ flexDirection: 'row' }}>
              <Rating
                type="star"
                readonly
                startingValue={5}
                imageSize={10}
                style={{
                  marginTop: 2
                }}
              />
              <Text style={styles.textRate}>(12)</Text>
            </View>
            <Text style={styles.textRate}>đã bán 12kg</Text>
          </View>
        </View>
        <View style={{ height: 5 }} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '43%',
    // height: 225,
    backgroundColor: variables.COLOR.white,
    borderRadius: 15,
    elevation: 3,
    padding: 3
  },
  wrapImage: {
    height: 150,
    width: '100%',
    padding: 2
  },
  img: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  wrapinfomation: {
    paddingHorizontal: 5,
    marginTop: 5
  },
  wrapRate: {
    flexDirection: 'row',
    marginTop: 4,
    justifyContent: 'space-between'
  },
  textRate: {
    color: 'gray',
    fontSize: 10
  }
})
