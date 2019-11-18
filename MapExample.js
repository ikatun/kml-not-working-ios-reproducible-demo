import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';

import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const SAMPLE_REGION = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

export class MapExample extends React.Component {
  render() {
    return (
      <ScrollView style={StyleSheet.absoluteFillObject}>
        <MapView
          provider="google"
          style={styles.map}
          initialRegion={SAMPLE_REGION}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: 800,
    marginVertical: 50,
  },
});
