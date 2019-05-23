import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Card, Image } from 'react-native-elements';
import { connect } from 'react-redux';
import { getNewProduct } from '../../redux/actions/home';
import { Loaimport { FlatList } from 'react-native-gesture-handler';
ding } from '../../components';

import * as variables from '../../config/variables';

class ItemNewProduct extends PureComponent {
    componentDidMount() {
        this.props.getNewProduct();
    }

    renderItem = ({ item }) => (
            <View>
                <TouchableOpacity
                    style={styles.container}
                >
                    <View
                        style={styles.wrapImgProduct}
                    >
                        <Image
                            source={{ uri: 'http://hstatic.net/808/1000144808/1000194018/slideshow_image_5.jpg?v=1487' }}
                            style={styles.imgProduct}
                        />
                    </View>
                    <View style={{ paddingHorizontal: 5, marginTop: 5 }}>
                        <Text style={{ color: variables.COLOR.black }}>Cam Mỹ</Text>
                        <Text style={{ fontSize: 12, color: variables.COLOR.orange }}>Tomita Cầu Giấy</Text>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: variables.COLOR.black }}>20.000đ/kg</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    render() {
        if (this.props.isLoading) {
            return (
                <View >
                    <Loading />
                </View>
            );
        }
        return (
            <View>
              <FlatList 
                 data={this.props.data}
                 extraData={this.state}
                 keyExtractor={this._keyExtractor}
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
