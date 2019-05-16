import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-banner-carousel';
import { connect } from 'react-redux';
import { getDataBanner } from '../../redux/actions/home';
import { Loading } from '../../components';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 160;

const images = [
    'http://file.hstatic.net/1000144808/file/l_ch_nh_p_h_ng_t__i_2018_grande.png',
    'http://hstatic.net/808/1000144808/1000194018/slideshow_image_3.jpg?v=1487',
    'http://hstatic.net/808/1000144808/1000194018/slideshow_image_5.jpg?v=1487',
    'http://hstatic.net/808/1000144808/1000194018/slideshow_image_4.jpg?v=1487'
];

class BannerSlide extends Component {
    componentDidMount = () => {
        this.props.getDataBanner();
    }

    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
            </View>
        );
    }

    render() {
        console.log(this.props.data);
        return (
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
    data: state.bannerReducer.dataHome,
    isLoading: state.bannerReducer.loading,
    error: state.bannerReducer.error
});

const mapDispathToProps = (dispath) => ({
    getDataBanner: () => {
        dispath(getDataBanner());
    }
});

export default connect(mapStateToProps, mapDispathToProps)(BannerSlide);
