import React from 'react';
import {ScrollView, Text} from 'react-native';
import {StackParamList} from './navtypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {YTPlaylistDownloader} from '../components/YTPlaylistDownloader';

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'YoutubeDownloader'>;
};

export const YoutubeDownloaderScreen: React.FC<ProfileScreenProps> = ({
  navigation,
}) => {
  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      <Text>
        I don't know if this'll work, but we might be able to see the playlists
      </Text>
      <YTPlaylistDownloader />
    </ScrollView>
  );
};
