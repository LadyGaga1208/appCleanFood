import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import * as variables from '../../config/variables';

export default class Catalogues extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    centerComponent={{ text: 'Danh muc', style: { color: variables.COLOR.white, fontWeight: '500', fontSize: variables.FONTSIZE.large } }}
                    containerStyle={{
                        backgroundColor: variables.mainColor,
                    }}
                    statusBarProps={{
                        translucent: true
                    }}
                />
                <View style={{ backgroundColor: variables.backgroundColor, flex: 1 }} >
                    <TouchableOpacity style={{}}>
                        <View
                            style={{
                                backgroundColor: variables.COLOR.white,
                                width: '100%',
                                height: 50,
                                borderRadius: 0,
                                paddingHorizontal: 10,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                                borderBottomWidth: 0.5,
                                borderBottomColor: 'gray'
                            }}
                        >
                            <Text style={{ color: variables.COLOR.black }}>Rau, cu, qua</Text>
                            <Icon
                                type="Ionicons"
                                name="arrow-forward"
                                color="gray"
                                size={17}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{}}>
                        <View
                            style={{
                                backgroundColor: variables.COLOR.white,
                                width: '100%',
                                height: 50,
                                borderRadius: 0,
                                paddingHorizontal: 10,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                                borderBottomWidth: 0.5,
                                borderBottomColor: 'gray'
                            }}
                        >
                            <Text style={{ color: variables.COLOR.black }}>Thit heo, bo ,ga</Text>
                            <Icon
                                type="Ionicons"
                                name="arrow-forward"
                                color="gray"
                                size={17}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{}}>
                        <View
                            style={{
                                backgroundColor: variables.COLOR.white,
                                width: '100%',
                                height: 50,
                                borderRadius: 0,
                                paddingHorizontal: 10,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                                borderBottomWidth: 0.5,
                                borderBottomColor: 'gray'
                            }}
                        >
                            <Text style={{ color: variables.COLOR.black }}>Thuy hai san</Text>
                            <Icon
                                type="Ionicons"
                                name="arrow-forward"
                                color="gray"
                                size={17}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={{ height: 10, width: '100%' }} />
                    <TouchableOpacity style={{}}>
                        <View
                            style={{
                                backgroundColor: variables.COLOR.white,
                                width: '100%',
                                height: 50,
                                borderRadius: 0,
                                paddingHorizontal: 10,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                                borderBottomWidth: 0.5,
                                borderBottomColor: 'gray'
                            }}
                        >
                            <Text style={{ color: variables.COLOR.black }}>San pham moi</Text>
                            <Icon
                                type="Ionicons"
                                name="arrow-forward"
                                color="gray"
                                size={17}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{}}>
                        <View
                            style={{
                                backgroundColor: variables.COLOR.white,
                                width: '100%',
                                height: 50,
                                borderRadius: 0,
                                paddingHorizontal: 10,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                                borderBottomWidth: 0.5,
                                borderBottomColor: 'gray'
                            }}
                        >
                            <Text style={{ color: variables.COLOR.black }}>San pham ban chay</Text>
                            <Icon
                                type="Ionicons"
                                name="arrow-forward"
                                color="gray"
                                size={17}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{}}>
                        <View
                            style={{
                                backgroundColor: variables.COLOR.white,
                                width: '100%',
                                height: 50,
                                borderRadius: 0,
                                paddingHorizontal: 10,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                                borderBottomWidth: 0.5,
                                borderBottomColor: 'gray'
                            }}
                        >
                            <Text style={{ color: variables.COLOR.black }}>San pham yeu thich</Text>
                            <Icon
                                type="Ionicons"
                                name="arrow-forward"
                                color="gray"
                                size={17}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
