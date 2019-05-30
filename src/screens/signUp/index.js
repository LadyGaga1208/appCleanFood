import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header, Input, Button } from 'react-native-elements';
import { userSignUp } from '../../redux/actions/user';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import * as variables from '../../config/variables';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    centerComponent={{ text: 'Đăng kí', style: { color: variables.COLOR.white, fontWeight: '500', fontSize: variables.FONTSIZE.large } }}
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
                        label="Tên đăng nhập"
                        placeholder="Tên"
                        value={this.state.name}
                        onChangeText={(text) => {
                            this.setState({
                                name: text
                            })
                        }}
                    />
                    <Input
                        label="Email"
                        placeholder="Email"
                        containerStyle={{
                            marginTop: 10
                        }}
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
                        value={this.state.password}
                        onChangeText={(text) => {
                            this.setState({
                                password: text
                            })
                        }}
                    />
                    <Button
                        title="Đăng kí"
                        buttonStyle={{
                            backgroundColor: variables.mainColor,
                            marginTop: 40,
                            marginHorizontal: 10
                        }}
                        onPress={() => this.props.userSignUp({
                            name: this.state.name,
                            email: this.state.email,
                            type: "001",
                            password: this.state.password
                        })}
                    />
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    userSignUp: (data) => {
        dispatch(userSignUp(data));
    }
});

const mapStateToProps = (state) => ({
    user: state.userReducer.dataUser,
    isLoading: state.userReducer.loading,
    error: state.userReducer.error
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
