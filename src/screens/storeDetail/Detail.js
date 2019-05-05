import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as imgs from '../../assets/images';
import * as variables from '../../config/variables'

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image source={{ uri: "https://images.foody.vn/res/g8/71299/prof/s576x330/foody-upload-api-foody-mobile-avar-190221134049.jpg" }}
                    style={{ width: "100%", height: 200 }}
                />
                <View style={styles.wrapInfo}>
                    <Image source={imgs.store} style={{ width: 24, height: 24 }} />
                    <Text style={{ fontSize: 16, color: variables.COLOR.orange, marginLeft: 10 }}>Bác Tôm Trần Duy Hưng</Text>
                </View>
                <View style={styles.wrapInfo}>
                    <Image source={imgs.place} style={{ width: 20, height: 20, tintColor: variables.COLOR.fb }} />
                    <Text style={{ fontSize: 14, color: variables.COLOR.black, marginLeft: 5 }}>12 Trần Duy Hưng, Trung Hòa, Cầu Giay, Hà Nội</Text>
                </View>
                <View style={styles.wrapInfo}>
                    <Image source={imgs.phone} style={{ width: 20, height: 20, tintColor: variables.COLOR.fb }} />
                    <Text style={{ fontSize: 14, color: variables.COLOR.black, marginLeft: 5 }}>0974539894</Text>
                </View>
                <View style={styles.wrapInfo}>
                    <Image source={imgs.time} style={{ width: 20, height: 20, tintColor: variables.COLOR.fb }} />
                    <Text style={{ fontSize: 14, color: variables.COLOR.black, marginLeft: 5 }}>8:00-21:00</Text>
                </View>
                <View style={styles.wrapInfo}>
                    <Image source={imgs.face} style={{ width: 20, height: 20, tintColor: variables.COLOR.fb }} />
                    <Text style={{ fontSize: 14, color: variables.COLOR.black, marginLeft: 5 }}>https://www.facebook.com/raubactom/</Text>
                </View>
                <View style={styles.wrapInfo}>
                    <Image source={imgs.email} style={{ width: 20, height: 20, tintColor: variables.COLOR.fb }} />
                    <Text style={{ fontSize: 14, color: variables.COLOR.black, marginLeft: 5 }}>longdq@gmail.com</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapInfo: {
        flexDirection: "row",
        marginTop: 10
    }
})
