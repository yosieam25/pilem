import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/Router';

const App = () => {
  return (
    <View>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </View>
  );
};

export default App;
