import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header, Button } from 'react-native-elements';
import * as variables from '../../config/variables';
import ItemCart from './ItemCart';

export default class Carts extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: variables.backgroundColor }} >
                <Header
                    centerComponent={{ text: 'Giỏ hàng', style: { color: '#fff', fontSize: 18, fontWeight: '500' } }}
                    containerStyle={{
                        backgroundColor: variables.mainColor
                    }}
                />
                <View style={{ flex: 1 }}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <ItemCart />
                    </View>
                    <View style={{ width: '100%', height: 60, backgroundColor: variables.COLOR.white, position: 'absolute', bottom: 0, flexDirection: 'row' }}>
                        <View style={{ width: '60%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#444', fontSize: 18 }}>Tổng: 1.223.000d</Text>
                        </View>
                        <View style={{ width: '40%', justifyContent: 'center', alignItems: 'center' }}>
                            <Button
                                title="Thanh toán"
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
