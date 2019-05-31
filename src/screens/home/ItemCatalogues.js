import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, StyleSheet, FlatList, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { getCatalogues } from '../../redux/actions/home';
import { Loading } from '../../components';

import * as variables from '../../config/variables';

const screenWidth = Dimensions.get('window').width;

class ItemCatalogues extends Component {
    componentDidMount() {
        this.props.getCatalogues();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.data, 'hihi m biet tao khong');
    }
    
    renderItem = ({ item }) => (
            <TouchableOpacity style={{ flexDirection: 'row', elevation: 5 }}>
                <ImageBackground
                    source={{ uri: item.img }}
                    style={styles.backgroundImage}
                >
                    <View style={styles.viewBackground}>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )

    render() {
        console.log(this.props.data, 'du lieu day nay');
        if (this.props.isLoading) {
            return (
                <View >
                    <Loading />
                </View>
            );
        }
        return (
            <View style={{ marginTop: 10 }}>
                <FlatList
                    data={this.props.data}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderItem}
                    numColumns={3}
                    columnWrapperStyle={{
                        width: screenWidth,
                        justifyContent: 'space-around',
                    }}
                    ItemSeparatorComponent={() => <View style={{ width: 10, height: 10 }} />}
                />
            </View>
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
});

const mapStateToProps = (state) => ({
    data: state.cataloguesReducer.data,
    isLoading: state.cataloguesReducer.loading,
    error: state.cataloguesReducer.error
});

const mapDispathToProps = (dispath) => ({
    getCatalogues: () => {
        dispath(getCatalogues());
    }
});

export default connect(mapStateToProps, mapDispathToProps)(ItemCatalogues);
