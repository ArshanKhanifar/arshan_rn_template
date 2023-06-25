import React, {useEffect, useRef} from 'react';
import {Button, View} from 'react-native';
import Video from 'react-native-video';
import RNFS from 'react-native-fs';

export const VideoPlayer = () => {
  const videoPlayerRef = useRef<Video | null>(null);
  const videoUri = `${RNFS.DocumentDirectoryPath}/Hello.mp4`;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'deepskyblue',
        padding: 20,
      }}>
      <Video
        source={{uri: videoUri}}
        ref={videoPlayerRef}
        ignoreSilentSwitch={'ignore'}
        volume={1}
        playInBackground={true}
        style={{width: '100%', height: 400, backgroundColor: 'white'}}
        controls={true}
      />
    </View>
  );
};

export default VideoPlayer;
