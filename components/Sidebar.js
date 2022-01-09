import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import emma from '../assets/emma.png';
import returnPng from '../assets/return.png';
import exit from '../assets/exit.png';
import clockLoad from '../assets/clockLoad.png';
import message from '../assets/message.png';
import loc from '../assets/location.png';
import card from '../assets/card.png';

import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const Sidebar = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: '70%',
        height: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          height: 150,
          width: '100%',
          backgroundColor: '#0E0E0E',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingLeft: 30,
        }}
      >
        <View
          style={{
            height: 40,
            width: 40,
            backgroundColor: '#fff',
            borderRadius: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={emma}
            style={{
              height: 40,
              width: 40,
              resizeMode: 'cover',
              borderRadius: 50,
            }}
          />
        </View>
        <View
          style={{
            marginLeft: 5,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              textTransform: 'capitalize',
            }}
          >
            user
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#727272',
                fontSize: 20,
                textTransform: 'capitalize',
              }}
            >
              edit profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <View
            style={{
              padding: 20,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                source={clockLoad}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
              <View
                style={{
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                  }}
                >
                  Subscriptions
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <View
            style={{
              padding: 20,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                source={returnPng}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
              <View
                style={{
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                  }}
                >
                  Nil
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <View
            style={{
              padding: 20,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                source={loc}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
              <View
                style={{
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                  }}
                >
                  History
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <View
            style={{
              padding: 20,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                source={card}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
              <View
                style={{
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                  }}
                >
                  Payment
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <View
            style={{
              padding: 20,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                source={message}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
              <View
                style={{
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                  }}
                >
                  Support
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <View
            style={{
              padding: 20,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                source={loc}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
              <View
                style={{
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                  }}
                >
                  Location
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <View
            style={{
              padding: 20,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                source={message}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
              <View
                style={{
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                  }}
                >
                  About
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <View
            style={{
              padding: 20,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                source={exit}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
              <View
                style={{
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                    color: 'red',
                  }}
                >
                  Logout
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Text style={tw`text-white text-lg`}>Refer a friend</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  button: {
    width: '70%',
    height: 70,
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 29,
  },
});
