import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { Text, View, Dimensions, Image, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import * as variables from '../../config/variables';
import * as images from '../../assets/images';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 20.990437;
const LONGITUDE = 105.8466438;
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
    this.mapRef = null;

  }


  componentDidMount = async () => {
    this.getCurrentLocation();
    this.mapRef.fitToSuppliedMarkers(
      [{
        latitude: 21.0381296,
        longitude: 105.7992297
      }, {
        latitude: 21.0362489,
        longitude: 105.7884666
      }],
    );
  }

  getCurrentLocation = async () => {
    if (Platform.OS === 'android') {
      try {
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
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          navigator.geolocation.getCurrentPosition(
            (position, error) => {
              console.log(error);
              console.log(position, 'Vị trí lấy được');
              this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            }, { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
          );
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
    if (Platform.OS === "ios") {
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
          ref={(ref) => { this.mapRef = ref }}
        >
          <Marker
            title="hehe"
            description="quan bun dau ne"
            ref={marker => { this.marker = marker; }}
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude
            }}
          />
          <Marker
            ref={marker => { this.hehe = marker; }}
            coordinate={{
              latitude: 21.0381296,
              longitude: 105.7992297
            }}
            pinColor="#42f450"
          />
          <Marker
            ref={marker => { this.hihi = marker; }}

            coordinate={{
              latitude: 21.0362489,
              longitude: 105.7884666
            }}
          />
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
