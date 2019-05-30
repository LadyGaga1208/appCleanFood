import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Header, Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { AccessToken, LoginManager } from 'react-native-fbsdk';

import Icon from 'react-native-vector-icons/FontAwesome';
import { userLogin } from '../../redux/actions/user';
import * as variables from '../../config/variables';
import { Loading } from '../../components';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    componentWillReceiveProps = async (nextprops) => {
        if (nextprops.user.validate_token) {
            this.signInAsync(nextprops.user);
        }
        if (nextprops.error !== this.props.error) {
            const e = this.getErrorLogin(nextprops.error);
            Alert.alert(
                'Lỗi',
                `${e}`,
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
        }
    }

    getErrorLogin = (error) => {
        let stringError = '';
        Object.keys(error).forEach((key) => {
            console.log(key, error[key]);
            stringError += error[key];
        });
        return stringError;
    }
    loginFB = () => {
        LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
            (result) => {
                if (result.isCancelled) {
                    console.log('Login cancelled');
                } else {
                    console.log(result, 'ket qua login facebook');
                    console.log(
                        `Login success with permissions: ${
                        result.grantedPermissions.toString()}`
                    );
                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            console.log(data, 'dfgsaoghsadhfgsao');
                            console.log(data.accessToken.toString(), data.userID);
                            this.initUser(data.accessToken.toString());
                        }
                    );
                }
            },
            (error) => {
                console.log(`Login fail with error: ${error}`);
            });
    }
    initUser(token, id) {
        fetch(`https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=${token}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
            })
            .catch(() => {
                reject('ERROR GETTING DATA FROM FACEBOOK');
            });
    }

    signInAsync = async (data) => {
        console.log('hehe');
        try {
            await AsyncStorage.setItem('userToken', JSON.stringify(data));
            this.props.navigation.navigate('App');
        } catch (error) {
            console.log(error, 'loi khi luu token');
        }
    };
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
                    {this.props.loading ? <Loading /> : null}
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
                            });
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
                                });
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
                        onPress={() => this.loginFB()}
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

const mapStateToProps = (state) => ({
    user: state.userReducer.dataUser,
    isLoading: state.userReducer.loading,
    error: state.userReducer.error
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
