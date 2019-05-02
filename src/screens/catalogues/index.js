import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { Text, View, Dimensions, Image, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import * as variables from '../../config/variables';
import * as images from '../../assets/images';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Catalogues extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

    this.state = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
    };
  }


  componentDidMount = async () => {
    // this.getCurrentLocation();
    // eslint-disable-next-line no-undef
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     console.log('wokeeey');
    //     console.log(position);
    //     this.setState({
    //       latitude: position.coords.latitude,
    //       longitude: position.coords.longitude,
    //     });
    //   },
    //   { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 },
    // );
    // this.getCurrentLocation();
  }

  getCurrentLocation = async () => {
    if (Platform.OS === 'android') {
      try {
        console.log(' ......................................');
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Cool Photo App Camera Permission',
            message:
              'Cool Photo App needs access to your camera ' +
              'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        console.log(granted, 'granted.............');
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('hehehehehehehe=======');
          // eslint-disable-next-line no-undef
          navigator.geolocation.getCurrentPosition(
            (position, error) => {
              console.log(error);
              console.log(position, 'Vị trí lấy được');
              this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            },
            // { enableHighAccuracy: true, timeout: 200000, maximumAge: 3600000 },
          );
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.log('hahahaha//////////////////');
        console.warn(err);
      }
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('wokeeey');
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          {/* <Marker
            ref={marker => { this.marker = marker; }}
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude
            }}
          /> */}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
