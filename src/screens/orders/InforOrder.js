import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Header, Button, Input } from 'react-native-elements';

import * as variables from '../../config/variables'
import * as imgs from '../../assets/images'

export default class InforOrder extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: variables.COLOR.white }}>
                <Header
                    centerComponent={{ text: 'Địa chỉ nhận hàng', style: { color: '#fff', fontSize: 18, fontWeight: '500' } }}
                    containerStyle={{
                        backgroundColor: variables.mainColor
                    }}
                />
                <View style={{ flex: 1, alignItems: "center", marginTop: 40 }}>
                    <Image source={imgs.checked} style={{ tintColor: variables.mainColor }} />
                    <Text style={{ marginTop: 10, color: variables.mainColor }}>Đặt hàng thành công</Text>
                    <Text style={{ marginTop: 20, fontSize: 18 }}>Cảm ơn bạn đã đặt hàng tại CleanFood!</Text>
                </View>
                <View>
                    <Button
                        title="Tiếp tục mua hàng"
                    />
                </View>
            </View>
        )
    }
}
