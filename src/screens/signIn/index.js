import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { userLogin } from '../../redux/actions/user'
import * as variables from '../../config/variables';
import { connect } from 'react-redux';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    centerComponent={{ text: 'TOMITA', style: { color: variables.COLOR.white, fontWeight: '500', fontSize: variables.FONTSIZE.large } }}
                    containerStyle={{
                        backgroundColor: variables.mainColor,
                    }}
                    statusBarProps={{
                        translucent: true
                    }}
                />
                <ScrollView style={{ flex: 1, paddingHorizontal: variables.Pad }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: variables.FONTSIZE.large,
                            color: variables.COLOR.black,
                            marginTop: 20
                        }}
                    >Đăng Nhập</Text>
                    <Input
                        containerStyle={{
                            marginTop: 50
                        }}
                        label="Email"
                        placeholder="Email"
                        value={this.state.email}
                        onChangeText={(text) => {
                            this.setState({
                                email: text
                            })
                        }}
                    />
                    <Input
                        secureTextEntry
                        label="Mật khẩu"
                        placeholder="Mật khẩu"
                        containerStyle={{
                            marginTop: 10
                        }}
                        onChangeText={
                            (text) => {
                                this.setState({
                                    password: text
                                })
                            }
                        }
                    />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPass')}>
                        <Text style={{ color: 'blue', marginTop: 10, marginLeft: 10 }}>Quên mật khẩu ?</Text>
                    </TouchableOpacity>
                    <Button
                        title="Đăng nhập"
                        buttonStyle={{
                            backgroundColor: variables.mainColor,
                            marginTop: 40,
                            marginHorizontal: 10
                        }}
                        onPress={() => this.props.userLogin({
                            email: this.state.email,
                            password: this.state.password
                        })}
                    />
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'gray', height: 1, width: 50 }} />
                        <Text style={{ marginHorizontal: 10 }}>hoặc</Text>
                        <View style={{ backgroundColor: 'gray', height: 1, width: 50 }} />
                    </View>
                    <Button
                        title="Tiếp tục với facebook"
                        buttonStyle={{
                            backgroundColor: '#3b5998',
                            marginTop: 10,
                            marginHorizontal: 10
                        }}
                        icon={
                            <Icon
                                style={{ marginRight: 10 }}
                                size={19}
                                color="white"
                                name="facebook-f"
                            />
                        }
                    />
                    <Text style={{ color: 'blue', marginTop: 50, marginLeft: 10 }}>Chưa có tài khoản ?</Text>
                    <Button
                        title="Đăng kí"
                        buttonStyle={{
                            backgroundColor: variables.mainColor,
                            marginTop: 10,
                            marginHorizontal: 10
                        }}
                        onPress={() => this.props.navigation.navigate('SignUp')}
                    />
                </ScrollView>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    userLogin: (data) => {
        dispatch(userLogin(data));
    }
});

export default connect(null, mapDispatchToProps)(SignIn);
