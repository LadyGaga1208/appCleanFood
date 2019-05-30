import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Header, Button, Input } from 'react-native-elements';

import * as variables from '../../config/variables'

export default class Address extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: variables.COLOR.white }}>
                <Header
                    centerComponent={{ text: 'Địa chỉ nhận hàng', style: { color: '#fff', fontSize: 18, fontWeight: '500' } }}
                    containerStyle={{
                        backgroundColor: variables.mainColor
                    }}
                />
                <View style={{ width: "100%", paddingHorizontal: 10, marginTop: 10 }}>
                    <Input
                        placeholder="Tên"
                        label="Tên người nhận"
                    />
                    <Input
                        placeholder="SĐT"
                        label="Số điện thoại"
                        keyboardType="phone-pad"
                    />
                    <Input
                        placeholder="Địa chỉ"
                        label="Địa chỉ người nhận"
                    />
                </View>

                <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
                    <Button
                        title="Tiếp tục"
                    />
                </View>
            </View>
        )
    }
}
