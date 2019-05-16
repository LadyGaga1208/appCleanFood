import React, { Component } from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import * as variables from '../config/variables';

const { width } = Dimensions.get('window');

export class Loading extends Component {
    render() {
        return (
            <View
                style={{
                    elevation: 5,
                    padding: 10,
                    backgroundColor: variables.COLOR.white,
                    position: 'absolute',
                    top: 50,
                    left: (0.5 * width) - 30,
                    borderRadius: 30
                }}
            >
                <ActivityIndicator size="large" color={variables.mainColor} />
            </View>
        );
    }
}
