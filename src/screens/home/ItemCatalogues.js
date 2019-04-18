import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';

import * as variables from '../../config/variables';

export default class ItemCatalogues extends Component {
    render() {
        return (
            <TouchableOpacity style={{ flexDirection: 'row', elevation: 5 }}>
                <ImageBackground
                    source={{ uri: 'https://image.dantocmiennui.vn/uploaddtmn//2017/6/19/17c7253a5639582e41ea8f9be4d6dd5b-1.jpg' }}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 20,
                        overflow: 'hidden',
                    }}
                >

                    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)', justifyContent: 'flex-end' }}>
                        <Text
                            style={{
                                color: variables.COLOR.white,
                                fontWeight: '500',
                                textAlign: 'center',
                                marginBottom: 10
                            }}
                        >RAU CU QUA</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    }
}
