import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TMHeader from '../../components/Header'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import * as variables from '../../config/variables';
import { ItemProduct } from '../../components'
import Detail from './Detail'

export default class StoreDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {
        header: null
    };


    render() {
        return (
            <View style={{ flex: 1 }}>
                <TMHeader title="StoreDetail" />
                <ScrollableTabView
                    tabBarTextStyle={{}}
                    tabBarActiveTextColor={variables.mainColor}
                    tabBarInactiveTextColor="gray"
                    tabBarUnderlineStyle={{
                        backgroundColor: variables.mainColor
                    }}
                >
                    <View tabLabel="Thông tin" style={styles.container}>
                        <Detail />
                    </View>
                    <View tabLabel="Sản phẩm" style={styles.container}>
                        <ItemProduct />
                    </View>
                </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: variables.COLOR.white,
        padding: 10
    }
})
