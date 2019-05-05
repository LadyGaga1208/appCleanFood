import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ItemSearchStore from './ItemSearchStore';

export default class SearchStore extends Component {
    render() {
        return (
            <View>
                <Text>6 kết quả được tìm thấy</Text>
                <ItemSearchStore onPress={this.props.onPress} />
            </View>
        );
    }
}
