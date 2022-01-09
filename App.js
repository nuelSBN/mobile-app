import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EstimateScreen from './screens/EstimateScreen';
import PaymentScreen from './screens/PaymentScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="EstimateScreen"
              component={EstimateScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PaymentScreen"
              component={PaymentScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ConfirmationScreen"
              component={ConfirmationScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
