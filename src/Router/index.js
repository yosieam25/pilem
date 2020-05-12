import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../Pages';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Router;
