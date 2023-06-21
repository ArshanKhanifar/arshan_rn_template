import React, {useContext} from 'react';
import {Button, ScrollView} from 'react-native';
import {AuthContext} from '../hooks/auth';
import {StackParamList} from './navtypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Login'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const {isSignedIn, signIn} = useContext(AuthContext);

  const handleLogin = async () => {
    await signIn();
    navigation.navigate('Profile');
  };

  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      {!isSignedIn && (
        <Button title="Login with Google" onPress={handleLogin} />
      )}
    </ScrollView>
  );
};

export default LoginScreen;
