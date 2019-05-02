import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import * as variables from '../../config/variables';
import * as imgs from '../../assets/images';

export default class ItemCart extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', padding: 10, marginTop: 10, width: '100%', backgroundColor: variables.COLOR.white, elevation: 2, borderRadius: 10 }}>
                <View >
                    <Image source={{ uri: 'https://i.pinimg.com/564x/29/18/0d/29180d0b2b3542fc474ef92c20205ef5.jpg' }} style={{ width: 70, height: 80 }} />
                </View>
                <View style={{ width: '65%', paddingHorizontal: 10 }}>
                    <Text style={{ color: '#444' }}>Hey, I'm coming the feature</Text>
                    <Text>12.000d</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
                        <TouchableOpacity style={{ width: 40, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={imgs.minus} style={{ width: 20, height: 20, tintColor: variables.mainColor }} />
                        </TouchableOpacity>
                        <View style={{ width: 40, height: 30, borderColor: 'gray', borderWidth: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>12</Text>
                        </View>
                        <TouchableOpacity style={{ width: 40, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={imgs.plus} style={{ width: 20, height: 20, tintColor: variables.mainColor }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={imgs.icDelete} style={{ width: 20, height: 20, tintColor: 'gray' }} />
                </View>
            </View>
        );
    }
}
