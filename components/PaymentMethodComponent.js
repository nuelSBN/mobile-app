import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import masterCard from '../assets/master.png';
import paystack from '../assets/paystack.png';
import mark from '../assets/mark.png';
import plus from '../assets/plus.png';
import money from '../assets/money.png';

const PaymentMethodComponent = () => {
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
        <Text style={styles.heading}>Payment Methods</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ConfirmationScreen')}
        >
          <View style={styles.container}>
            <View style={styles.box}>
              <View>
                <Image
                  source={masterCard}
                  style={{
                    width: 40,
                    height: 40,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View>
                <Text style={styles.boxText}>5764 8638 **** ****</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ConfirmationScreen')}
        >
          <View style={styles.container}>
            <View style={styles.box}>
              <View
                style={{
                  width: '90%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Image
                  source={paystack}
                  style={{
                    width: 100,
                    height: 40,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <Image
                source={mark}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ConfirmationScreen')}
        >
          <View style={styles.container}>
            <View style={styles.box}>
              <View
                style={{
                  width: '90%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '900',
                  }}
                >
                  Add Card
                </Text>
              </View>
              <Image
                source={plus}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ConfirmationScreen')}
        >
          <View style={styles.container}>
            <View style={styles.box}>
              <View
                style={{
                  width: '90%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '900',
                  }}
                >
                  Cash
                </Text>
              </View>
              <Image
                source={money}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ConfirmationScreen')}
      >
        <View
          style={{
            backgroundColor: '#E9EBEC',
            height: 100,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginTop: 20,
            paddingRight: 20,
          }}
        >
          <Image
            source={paystack}
            style={{
              width: 100,
              height: 60,
              resizeMode: 'contain',
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ConfirmationScreen')}
        style={{
          height: 100,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: '80%',
            height: '50%',
            backgroundColor: '#000',
            borderRadius: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: '700',
              fontSize: 20,
            }}
          >
            select
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethodComponent;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 20,
    paddingVertical: 15,
    borderBottomWidth: 0.4,
  },
  heading: {
    fontSize: 25,
    fontWeight: '600',
    fontStyle: 'normal',
  },
  back: {
    position: 'absolute',
    left: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    paddingHorizontal: 10,
    borderBottomWidth: 0.4,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 20,
    marginLeft: 5,
  },
});
