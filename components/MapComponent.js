import React from 'react';
import MapView from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';

const MapComponent = () => {
  return (
    <MapView
      style={tw`flex-1`}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.005,
        longitudeDelta: 0.05,
      }}
    />
  );
};

export default MapComponent;
