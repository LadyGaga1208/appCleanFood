import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Header, Button, Input } from 'react-native-elements';

import * as variables from '../../config/variables'

export default class ConfirmOrder extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: variables.backgroundColor }}>
                <Header
                    centerComponent={{ text: 'Xác nhận', style: { color: '#fff', fontSize: 18, fontWeight: '500' } }}
                    containerStyle={{
                        backgroundColor: variables.mainColor
                    }}
                />
                <View style={styles.wrapBlock}>
                    <Text style={{ color: variables.COLOR.black, fontWeight: "500" }}>Địa chỉ nhận hàng</Text>
                    <Text>Đoàn Quang Long</Text>
                    <Text>0974539894</Text>
                    <Text>40/165 Dương Quảng Ham/Quan Hoa/Cầu Giay/Hà Nội</Text>
                </View>
                <View style={styles.wrapBlock}>
                    <Text style={{ color: variables.COLOR.black, fontWeight: "500" }}>Giao hàng tiêu chuẩn</Text>
                </View>
                <View style={styles.wrapBlock}>
                    <Text style={{ color: variables.COLOR.black, fontWeight: "500" }}>Thanh toán sau khi nhận hàng</Text>
                </View>
                <View style={{ backgroundColor: "#ffffff", marginTop: 10, paddingHorizontal: 10 }}>
                    <Text style={{ color: variables.COLOR.black, fontWeight: "500", marginTop: 10 }}>Thông tin đơn hàng</Text>
                    <View style={{ color: variables.COLOR.white, width: "100%", flexDirection: "row", marginTop: 10 }}>
                        <Image
                            source={{ uri: "http://baochinhphu.vn/Uploaded/dothimaihuong/2018_06_26/123.jpg" }}
                            style={{ width: 70, height: 70 }}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: variables.COLOR.black }}>Vải thiều thanh hà</Text>
                            <Text>Bác Tôm Hải Dương</Text>
                            <Text>12.000Đ X 12</Text>
                        </View>
                    </View>
                </View>
                <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
                    <Button
                        title="Thanh Toán"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapBlock: {
        padding: 10,
        backgroundColor: variables.COLOR.white,
        marginHorizontal: 15,
        borderRadius: 5,
        marginTop: 10
    }
})
