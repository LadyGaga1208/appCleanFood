import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as variables from '../../config/variables';

export default class ForgotPass extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    centerComponent={{ text: 'Quên mật khẩu', style: { color: variables.COLOR.white, fontWeight: '500', fontSize: variables.FONTSIZE.large } }}
                    leftComponent={{ icon: 'arrow-back', color: '#fff' }}
                    containerStyle={{
                        backgroundColor: variables.mainColor,
                    }}
                    statusBarProps={{
                        translucent: true
                    }}
                />
                <View style={{ backgroundColor: variables.COLOR.white, flex: 1, paddingHorizontal: variables.Pad }}>
                    <Input
                        containerStyle={{
                            marginTop: 50
                        }}
                        label="Email"
                        placeholder="Email"
                    />
                    <Button
                        title="Tiếp tục"
                        buttonStyle={{
                            backgroundColor: variables.mainColor,
                            marginTop: 40,
                            marginHorizontal: 10
                        }}
                    />
                </View>
            </View>
        );
    }
}
