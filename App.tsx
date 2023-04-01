import React from 'react';
import {StatusBar, View} from 'react-native';
import Routes from './src/routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DefaultTheme} from './src/themes';
import {SafeAreaView} from 'react-native-safe-area-context';

const App: React.FC = () => {
  return (
    <GestureHandlerRootView
      style={{flex: 1, backgroundColor: DefaultTheme.colors.initialBackground}}>
      <StatusBar hidden />
      <Routes />
    </GestureHandlerRootView>
  );
};

export default App;
