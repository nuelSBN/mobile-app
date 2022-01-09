import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import money from '../assets/money.png';
import clock from '../assets/clock.png';
import angleDown from '../assets/angleDown.png';

// import money from '../assets/money.png';

const SelectOptions = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`px-4`}>
      <View style={styles.top}>
        <View style={tw`w-20 h-2 bg-gray-400 rounded `} />
      </View>
      <TextInput
        style={tw`bg-gray-100 p-5 text-lg text-center`}
        placeholder="Title"
      />
      <TextInput
        style={tw`bg-gray-100 mt-3 p-5 text-lg text-center`}
        placeholder="Job description"
      />
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('EstimateScreen')}>
          <View style={styles.flexbox}>
            <Image
              source={clock}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
            />
            <Text
              style={{
                fontSize: 20,
                marginLeft: 5,
              }}
            >
              Time Estimated
            </Text>
            <Image
              source={angleDown}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                marginLeft: 5,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`text-lg flex flex-row`}
          onPress={() => navigation.navigate('PaymentScreen')}
        >
          <View style={styles.flexbox}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                source={money}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 5,
                }}
              >
                Payment
              </Text>
            </View>
          </View>
          <View>
            <Icon name="arrowright" color="black" type="antdesign" />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ConfirmationScreen')}
      >
        <Text style={tw`text-white text-lg`}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectOptions;

const styles = StyleSheet.create({
  top: {
    width: '100%',
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    textAlign: 'center',
  },
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 100,
    borderBottomWidth: 0.3,
    borderBottomColor: '#666',
  },
  border: {
    borderEndWidth: 0.3,
  },
  button: {
    width: '100%',
    height: 70,
    backgroundColor: '#000',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  flexbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
