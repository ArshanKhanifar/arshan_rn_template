import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './pages/LoginScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*
          getExampleScreens(Stack)
           */}
        <Stack.Screen
          name={'LoginScreen'}
          component={LoginScreen}
          options={{title: 'Login'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
