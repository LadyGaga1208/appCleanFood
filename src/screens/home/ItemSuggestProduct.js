import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Card, Image } from 'react-native-elements';

import * as variables from '../../config/variables';

export default class ItemSuggestProduct extends PureComponent {
    render() {
        return (
            <View>
                <TouchableOpacity
                    style={{
                        width: 100,
                        height: 150,
                        backgroundColor: variables.COLOR.white,
                        // borderColor: 'gray',
                        elevation: 5,
                        // borderWidth: 0.5,
                        borderRadius: 5,
                    }}
                >
                    <View
                        style={{
                            width: 100,
                            height: 94,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            source={{ uri: 'http://hstatic.net/808/1000144808/1000194018/slideshow_image_5.jpg?v=1487' }}
                            style={{
                                marginTop: 2,
                                width: 90,
                                height: 90,
                                resizeMode: 'stretch',
                            }}
                        />
                    </View>
                    <View style={{ paddingHorizontal: 5, marginTop: 10 }}>
                        <Text style={{ color: variables.COLOR.black }}>Cam Mỹ</Text>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: variables.COLOR.black, marginTop: 3 }}>20.000đ/kg</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
