import React, {useState} from 'react';
import {Button, ScrollView, View} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {CodeBlock} from '../components/CodeBlock';
import GoogleProfile from '../components/GoogleProfile';

GoogleSignin.configure({
  iosClientId:
    '466797358453-spav53h3199pqc7d6mcd405dvk6qi3tv.apps.googleusercontent.com',
  openIdRealm: '',
  // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

const LoginScreen = () => {
  const [authState, setAuthState] = useState<object>({});
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setAuthState({userInfo});
    } catch (error: object) {
      setAuthState({error});
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const signOut = async () => {
    await GoogleSignin.signOut();
    setAuthState({});
  };

  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      <Button title="Login with Google" onPress={signIn} />
      <Button title="Sign Out" onPress={signOut} />

      {authState?.userInfo?.user && (
        <GoogleProfile user={authState.userInfo.user} />
      )}
      <View style={{height: 300, backgroundColor: '#fff'}}>
        <CodeBlock>{JSON.stringify(authState, null, 2)}</CodeBlock>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
