import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Image } from 'react-native-elements';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { getNewProduct } from '../../redux/actions/home';
import { Loading } from '../../components';

import * as variables from '../../config/variables';

class ItemNewProduct extends Component {

    componentDidMount() {
        this.props.getNewProduct();
    }

    goToProductDetail = () => {
        this.props.navigation.navigate('ProductDetail');
    }

    renderItem = ({ item }) => (
        <View>
            <TouchableOpacity
                style={styles.container}
                onPress={this.goToProductDetail}
            >
                <View
                    style={styles.wrapImgProduct}
                >
                    <Image
                        source={{ uri: item.img }}
                        style={styles.imgProduct}
                    />
                </View>
                <View style={{ paddingHorizontal: 5, marginTop: 5 }}>
                    <Text style={{ color: variables.COLOR.black }}>{item.name}</Text>
                    <Text style={{ fontSize: 12, color: variables.COLOR.orange }}>{item.storeName}</Text>
                    <Text style={{ fontSize: 12, fontWeight: '500', color: variables.COLOR.black }}>{item.price}/{item.unit}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
    render() {
        console.log(this.props.navigation, 'this.props.navigation ........');
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
                    keyExtractor={(item) => item.productId}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        backgroundColor: variables.COLOR.white,
        elevation: 5,
        borderRadius: 7,
        paddingBottom: 5,
    },
    wrapImgProduct: {
        width: 100,
        height: 94,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgProduct: {
        marginTop: 2,
        width: 90,
        height: 90,
        resizeMode: 'stretch',
    }
});

const mapStateToProps = (state) => ({
    data: state.newProductReducer.data,
    isLoading: state.newProductReducer.loading,
    error: state.newProductReducer.error
});

const mapDispathToProps = (dispath) => ({
    getNewProduct: () => {
        dispath(getNewProduct());
    }
});

export default connect(mapStateToProps, mapDispathToProps)(ItemNewProduct);
