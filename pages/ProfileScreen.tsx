import React, {useContext} from 'react';
import {Button, ScrollView} from 'react-native';
import {AuthContext} from '../hooks/auth';
import GoogleProfile from '../components/GoogleProfile';
import {StackParamList} from './navtypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Profile'>;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  const {userInfo, signOut} = useContext(AuthContext);

  const handleSignOut = async () => {
    await signOut();
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      <Button title="Sign Out" onPress={handleSignOut} />
      {userInfo && userInfo.user && <GoogleProfile user={userInfo.user} />}
    </ScrollView>
  );
};

export default ProfileScreen;
