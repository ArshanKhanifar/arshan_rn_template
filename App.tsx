import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './pages/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*
          getExampleScreens(Stack)
           */}
        <Stack.Screen
          name={'Login'}
          component={Login}
          options={{title: 'Overview'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
