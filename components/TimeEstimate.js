import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import clock from '../assets/clock.png';
import mark from '../assets/tick.png';
import { Icon } from 'react-native-elements';

const TimeEstimate = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Icon name="arrowleft" color="black" type="antdesign" />
        </TouchableOpacity>
        <Text style={styles.heading}>Time Estimated</Text>
      </View>
      <View style={tw`mt-2`}>
        <TouchableOpacity onPress={() => navigation.navigate('PaymentScreen')}>
          <View style={styles.container}>
            <View style={styles.box}>
              <View>
                <Image
                  source={clock}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View>
                <Text style={styles.boxText}>Less than 15 mins</Text>
              </View>
            </View>
            <View>
              <Image
                source={mark}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PaymentScreen')}>
          <View style={styles.container}>
            <View style={styles.box}>
              <View>
                <Image
                  source={clock}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View>
                <Text style={styles.boxText}>15 minutes - 30 minutes</Text>
              </View>
            </View>
            <View>{/* <Text>check mark</Text> */}</View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PaymentScreen')}>
          <View style={styles.container}>
            <View style={styles.box}>
              <View>
                <Image
                  source={clock}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View>
                <Text style={styles.boxText}>31 minutes - 60 minutes</Text>
              </View>
            </View>
            <View>{/* <Text>check mark</Text> */}</View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PaymentScreen')}>
          <View style={styles.container}>
            <View style={styles.box}>
              <View>
                <Image
                  source={clock}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View>
                <Text style={styles.boxText}>1 hour - 2 hours</Text>
              </View>
            </View>
            <View>{/* <Text>check mark</Text> */}</View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PaymentScreen')}>
          <View style={styles.container}>
            <View style={styles.box}>
              <View>
                <Image
                  source={clock}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View>
                <Text style={styles.boxText}>2 hours - 4 hours</Text>
              </View>
            </View>
            <View>{/* <Text>check mark</Text> */}</View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TimeEstimate;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 20,
  },

  back: {
    position: 'absolute',
    left: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: '600',
    fontStyle: 'normal',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 0.4,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 25,
    marginLeft: 5,
  },
});
