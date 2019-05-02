import React, { Component } from 'react';
import {
    View, Image, TouchableOpacity, StyleSheet, Text, SafeAreaView, Platform,
    StatusBar
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import * as variables from '../../config/variables';
import * as images from '../../assets/images';
import SearchStore from './SearchStore';
import { ItemProduct } from '../../components';

export default class Search extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
    }

    updateSearch = search => {
        this.setState({ search });
    };


    render() {
        return (
            <SafeAreaView style={styles.droidSafeArea}>
                <View style={{ flex: 1 }}>
                    <View style={styles.wrapHeader}>
                        <TouchableOpacity style={styles.wraBack}>
                            <Image source={images.back} style={{ tintColor: 'gray', width: 24, height: 24 }} />
                        </TouchableOpacity>
                        <SearchBar
                            round
                            placeholder="Tìm kiếm..."
                            // showLoading
                            // autoFocus
                            onChangeText={this.updateSearch}
                            value={this.state.search}
                            containerStyle={styles.searchStyle}
                            inputContainerStyle={{
                                backgroundColor: variables.backgroundColor
                            }}
                        />
                    </View>
                    <ScrollableTabView
                        tabBarTextStyle={{}}
                        tabBarActiveTextColor={variables.mainColor}
                        tabBarInactiveTextColor="gray"
                        tabBarUnderlineStyle={{
                            backgroundColor: variables.mainColor
                        }}
                    >
                        <View tabLabel="Sản phẩm" style={styles.container}>
                            <Text>12 kết quả được tìm thấy</Text>
                            <ItemProduct />
                        </View>
                        <View tabLabel="Cửa hàng" style={styles.container}>
                            <SearchStore />
                        </View>
                    </ScrollableTabView>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    wrapHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    wraBack: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchStyle: {
        backgroundColor: '#ffffff',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        width: '80%'
    },
    container: {
        flex: 1,
        backgroundColor: variables.COLOR.white,
        padding: 10
    }
});
