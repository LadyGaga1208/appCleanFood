import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Image } from 'react-native-elements';

import * as variables from '../../config/variables';

export default class ItemNewProduct extends PureComponent {
    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.container}
                >
                    <View
                        style={styles.wrapImgProduct}
                    >
                        <Image
                            source={{ uri: 'http://hstatic.net/808/1000144808/1000194018/slideshow_image_5.jpg?v=1487' }}
                            style={styles.imgProduct}
                        />
                    </View>
                    <View style={{ paddingHorizontal: 5, marginTop: 5 }}>
                        <Text style={{ color: variables.COLOR.black }}>Cam Mỹ</Text>
                        <Text style={{ fontSize: 12, color: variables.COLOR.orange }}>Tomita Cầu Giấy</Text>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: variables.COLOR.black }}>20.000đ/kg</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        backgroundColor: variables.COLOR.white,
        elevation: 5,
        borderRadius: 7,
        paddingBottom: 5,
    },
    wrapImgProduct: {
        width: 100,
        height: 94,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgProduct: {
        marginTop: 2,
        width: 90,
        height: 90,
        resizeMode: 'stretch',
    }
})