import React, { Component } from 'react';
import { FlatList, View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getSuggestProduct } from '../../redux/actions/home';
import { Loading } from '../../components';
import * as variables from '../../config/variables';

class ListSugguestProduct extends Component {

  constructor(props) {
    super(props);
  }

    componentDidMount() {
        this.props.getSuggestProduct();
    }

    renderItem = ({ item }) => (
            <TouchableOpacity
              style={styles.container}
              onPress={() => this.props.navigation.navigate('ProductDetail')}
            >
              <View
                style={styles.wrapImage}
              >
                <Image
                  source={{
                    uri:
                      item.img
                  }}
                  style={styles.img}
                />
              </View>
              <View style={styles.wrapinfomation}>
                <Text style={{ fontSize: variables.FONTSIZE.medium, color: 'black' }}>
                  {item.name}
                </Text>
                <Text style={{ color: variables.COLOR.orange, fontSize: 14 }}>{item.storeName}</Text>
                <Text style={{ color: variables.mainColor, fontWeight: '500' }}>
                  {item.price}/{item.unit}
                </Text>
                <View
                  style={styles.wrapRate}
                >
                  <Text style={styles.textRate}>đã bán 12kg</Text>
                </View>
              </View>
              <View style={{ height: 5 }} />
            </TouchableOpacity>
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
                    style={{ marginTop: 10 }}
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
      width: '43%',
      backgroundColor: variables.COLOR.white,
      borderRadius: 15,
      elevation: 3,
      padding: 3
    },
    wrapImage: {
      height: 150,
      width: '100%',
      padding: 2
    },
    img: {
      height: '100%',
      width: '100%',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15
    },
    wrapinfomation: {
      paddingHorizontal: 5,
      marginTop: 5
    },
    wrapRate: {
      flexDirection: 'row',
      marginTop: 4,
      justifyContent: 'space-between'
    },
    textRate: {
      color: 'gray',
      fontSize: 10
    }
  });

const mapStateToProps = (state) => ({
    data: state.suggestReducer.data,
    isLoading: state.suggestReducer.loading,
    error: state.suggestReducer.error
});

const mapDispathToProps = (dispath) => ({
    getSuggestProduct: () => {
        dispath(getSuggestProduct());
    }
});

export default connect(mapStateToProps, mapDispathToProps)(ListSugguestProduct);
