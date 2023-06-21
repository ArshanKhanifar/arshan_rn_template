import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './pages/LoginScreen';
import {AuthProvider} from './hooks/auth';
import ProfileScreen from './pages/ProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          {/*
          getExampleScreens(Stack)
           */}
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{title: 'Login'}}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{title: 'Profile'}}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
