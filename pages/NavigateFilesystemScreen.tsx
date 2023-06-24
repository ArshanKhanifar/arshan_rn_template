import React from 'react';
import {ScrollView, Text} from 'react-native';
import {StackParamList} from './navtypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import FileSystemNavigator from '../components/FilesystemNavigator';

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Filesystem'>;
};

const FilesystemScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      <FileSystemNavigator />
    </ScrollView>
  );
};

export default FilesystemScreen;
