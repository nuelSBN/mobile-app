import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TimeEstimate from '../components/TimeEstimate';
import HomeScreen from './HomeScreen';

const EstimateScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      <TimeEstimate />
    </SafeAreaView>
  );
};

export default EstimateScreen;

const styles = StyleSheet.create({});
