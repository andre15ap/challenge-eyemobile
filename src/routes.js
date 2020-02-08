import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home/HomeScreen';
import PaymentScreen from './screens/Payment/PaymentScreen';

import COLORS from './config/Colors';


const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <StatusBar
          backgroundColor={COLORS.PRIMARY_DARK}
          barStyle="light-content"
      />
      <Stack.Navigator>
        <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ 
                headerShown: false,
            }} />
        <Stack.Screen 
            name="Payment" 
            component={PaymentScreen}
            options= {{
              headerShown: false,
            }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;