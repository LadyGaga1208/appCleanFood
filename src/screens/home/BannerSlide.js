import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-banner-carousel';
import { connect } from 'react-redux';
import { getDataBanner } from '../../redux/actions/home';
import { Loading } from '../../components';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 160;

class BannerSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
    }

    componentDidMount = () => {
        this.props.getDataBanner();
    }

    componentWillReceiveProps(nextprops) {
        if (nextprops.data.length) {
            const arrayImage = [];
            nextprops.data.map((element) => {
                arrayImage.push(element.img);
                this.setState({
                    images: [...arrayImage]
                });
            });
        }
    }

    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
            </View>
        );
    }
    render() {
        if (this.props.isLoading) {
            return (
                <View style={[styles.container, { width: BannerWidth, height: BannerHeight }]}>
                    <Loading />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {this.state.images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
});

const mapStateToProps = (state) => ({
    data: state.bannerReducer.data,
    isLoading: state.bannerReducer.loading,
    error: state.bannerReducer.error
});

const mapDispathToProps = (dispath) => ({
    getDataBanner: () => {
        dispath(getDataBanner());
    }
});

export default connect(mapStateToProps, mapDispathToProps)(BannerSlide);
