import React, {createContext, PropsWithChildren, useState} from 'react';
import {
  User,
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';

GoogleSignin.configure({
  iosClientId: Config.IOS_CLIENT_ID,
  openIdRealm: '',
  // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

interface AuthContextType {
  isSignedIn: boolean;
  userInfo: User | null;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  isSignedIn: false,
  userInfo: null,
  signIn: async () => {},
  signOut: async () => {},
});

export const AuthProvider = ({children}: PropsWithChildren) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<User | null>(null);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const _userInfo = await GoogleSignin.signIn();
      setIsSignedIn(true);
      setUserInfo(_userInfo);
    } catch (error: any) {
      setIsSignedIn(false);
      setUserInfo(null);
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
    setIsSignedIn(false);
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isSignedIn,
        userInfo,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
