import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './pages/LoginScreen';
import {AuthProvider} from './hooks/auth';
import ProfileScreen from './pages/ProfileScreen';
import FilesystemScreen from './pages/NavigateFilesystemScreen';
import {YoutubeDownloaderScreen} from './pages/YoutubeDownloaderScreen';
import VideoURLDownloader from './components/VideoURLDownloader';
import VideoPlayer from './components/VideoPlayer';

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
            name="VideoPlayer"
            component={VideoPlayer}
            options={{title: 'Video Player'}}
          />
          <Stack.Screen
            name="VideoURLDownloader"
            component={VideoURLDownloader}
            options={{title: 'VideoURLDownloader Navigator'}}
          />
          <Stack.Screen
            name="FilesystemScreen"
            component={FilesystemScreen}
            options={{title: 'Filesystem Navigator'}}
          />
          <Stack.Screen
            name="YoutubeDownloaderScreen"
            component={YoutubeDownloaderScreen}
            options={{title: 'Youtube Downloader'}}
          />
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
