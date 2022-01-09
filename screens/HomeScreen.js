import React, { useState } from 'react';
import { View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import HomeComponents from '../components/HomeComponents';
import bars from '../assets/bars.png';

const HomeScreen = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  return (
    <SafeAreaView
      style={[
        tw`bg-white h-full`,
        {
          position: 'relative',
        },
      ]}
    >
      <View
        style={{
          position: 'absolute',
          top: 50,
          left: 10,
          backgroundColor: 'white',
          height: 50,
          width: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
        }}
      >
        <TouchableOpacity>
          <Image
            source={bars}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
      <HomeComponents />
    </SafeAreaView>
  );
};

export default HomeScreen;
