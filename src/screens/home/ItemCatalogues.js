import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

import * as variables from '../../config/variables';

export default class ItemCatalogues extends Component {
    render() {
        return (
            <TouchableOpacity style={{ flexDirection: 'row', elevation: 5 }}>
                <ImageBackground
                    source={{ uri: 'https://image.dantocmiennui.vn/uploaddtmn//2017/6/19/17c7253a5639582e41ea8f9be4d6dd5b-1.jpg' }}
                    style={styles.backgroundImage}
                >

                    <View style={styles.viewBackground}>
                        <Text style={styles.text}>RAU CU QUA</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: 100,
        height: 100,
        borderRadius: 20,
        overflow: 'hidden',
    },
    viewBackground: {
        flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)', justifyContent: 'flex-end'
    },
    text: {
        color: variables.COLOR.white,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 10
    }
})
