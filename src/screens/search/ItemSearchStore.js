import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as variables from '../../config/variables';
import * as imgs from '../../assets/images';

export default class ItemSearchStore extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <Image source={{ uri: 'https://www.mard.gov.vn/PublishingImages/Nongnghiep/cachua1.jpg' }} style={{ width: 80, height: 80, }} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: variables.COLOR.orange, fontSize: 18 }}>Bác Tôm Lạc Long Quân</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Image source={imgs.place} style={{ width: 20, height: 20, tintColor: variables.COLOR.fb }} />
                        <Text numberOfLines={1} style={{ width: '78%', color: '#444444', marginLeft: 3 }}>12 Lạc Long Quân, Ha Nội</Text>
                    </View>
                    <Text style={{ marginTop: 5 }}>Phone: <Text style={{ color: variables.COLOR.fb }}>0974539894</Text></Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: variables.COLOR.white,
        elevation: 3,
        borderRadius: 10,
        padding: 5,
        flexDirection: 'row'
    }
});
