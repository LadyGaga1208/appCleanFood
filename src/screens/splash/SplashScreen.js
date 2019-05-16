import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-banner-carousel';
import AsyncStorage from '@react-native-community/async-storage';

import * as variables from '../../config/variables';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = Dimensions.get('window').height;

const images = [
    'https://phokinhte.com/wp-content/uploads/2017/03/Chu%E1%BB%97i-c%E1%BB%ADa-h%C3%A0ng-S%C3%B3i-Bi%E1%BB%83n-c%C3%B3-doanh-thu-v%C3%A0i-ch%E1%BB%A5c-tri%E1%BB%87u-%C4%91%E1%BB%93ng.jpg',
    'https://image2.tienphong.vn/w665/Uploaded/2019/lkyqski002/2016_10_13/a2_7_sgsj.jpg',
    'http://kinhtenongthon.vn/data/data/duycanh/image3%20(2)(2).JPG',
    'http://www.hadicofoods.com/images/images/10606319_145076869217259_9105091318001141506_n.jpg'
];

export default class SplashScreen extends Component {

    componentDidMount = async () => {
        this.getTokenUser();
    }

    getTokenUser = async () => {
        try {
            const value = await AsyncStorage.getItem('userToken');
            if (value !== null) {
                console.log(value);
                this.props.navigation.navigate('App');
            }
        } catch (error) {
            this.goToAuth();
        }
    }

    goToAuth() {
        this.props.navigation.navigate('Auth');
    }
    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight, resizeMode: 'stretch' }} source={{ uri: image }} />
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1, }}>
                <View style={styles.container}>
                    <Carousel
                        autoplay
                        autoplayTimeout={5000}
                        loop
                        index={0}
                        pageSize={BannerWidth}
                    >
                        {images.map((image, index) => this.renderPage(image, index))}
                    </Carousel>
                </View>
                <TouchableOpacity style={styles.bottomStyle} onPress={() => this.getTokenUser()}>
                    <Text style={{ color: variables.COLOR.white, fontSize: 16, fontWeight: '500' }}>Bắt đầu</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        flex: 1
    },
    bottomStyle: {
        position: 'absolute',
        bottom: 100,
        backgroundColor: variables.mainColor,
        height: 44,
        width: 0.4 * BannerWidth,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        marginLeft: 0.3 * BannerWidth
    }
});
