import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Header } from 'react-navigation';
import * as variables from '../config/variables';

export default class MyHeader extends Component {
    render() {
        return (
            <View
                style={{
                    height: Header.HEIGHT,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: variables.mainColor
                }}
            >
                {this.props.children}
            </View>
        );
    }
}
