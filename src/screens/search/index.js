import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from "react-native-elements";

export default class Search extends Component {
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
            <View>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={this.state.search}
                />
            </View>
        );
    }
}
