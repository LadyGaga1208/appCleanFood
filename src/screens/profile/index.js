import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import * as variables from '../../config/variables';

export default class Profile extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: variables.backgroundColor }} >
                <View
                    style={{
                        backgroundColor: variables.mainColor,
                        height: 120,
                        width: '100%',
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingHorizontal: 10
                    }}
                >
                    <View
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 35,
                            borderColor: variables.COLOR.white,
                            borderWidth: 5,
                            marginTop: 20,
                        }}
                    >
                        <Image
                            style={{
                                width: 60,
                                height: 60,
                                overflow: 'hidden',
                                borderRadius: 30
                            }}
                            source={{
                                uri: 'https://i.pinimg.com/564x/c7/1a/15/c71a15ee0afae219976c63b1e57bd4bf.jpg?b=t'
                            }}
                        />

                    </View>
                    <Text style={{ color: variables.COLOR.white, fontSize: 14, marginTop: 15, marginLeft: 10 }}>longdoanbk.94@gmail.com</Text>
                </View>
                <TouchableOpacity>
                    <View>
                        <Icon
                            type="font-awesome"
                            name="ballot-check"
                            size={12}
                            color="red"
                        />
                        <Text>HAHA</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
