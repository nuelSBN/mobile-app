import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import SelectOptions from './SelectOptions';
import bars from '../assets/bars.png';
import MapComponent from './MapComponent';

const HomeComponents = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <MapComponent />
      </View>
      <View style={tw`h-1/2`}>
        <SelectOptions />
      </View>
    </View>
  );
};

export default HomeComponents;

const styles = StyleSheet.create({});
