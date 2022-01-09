import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {} from 'react-native-web';
import PaymentMethodComponent from '../components/PaymentMethodComponent';
import EstimateScreen from './EstimateScreen';

const PaymentScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView>
      <Stack.Navigator>
        <Stack.Screen
          name="EstimateScreen"
          component={EstimateScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      <View>
        <PaymentMethodComponent />
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
