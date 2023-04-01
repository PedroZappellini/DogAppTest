import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DefaultTheme} from '../themes';

import InitialScreen from '../screens/InitialScreen';
import Home from '../screens/Home';

const Routes: React.FC = () => {
  const {Navigator, Screen} = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="InitialScreen" component={InitialScreen} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
