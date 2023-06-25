import React, {useEffect} from 'react';
import {View, Button} from 'react-native';
import RNFS from 'react-native-fs';

// Replace 'YOUR_YOUTUBE_PLAYLIST_URL' with the actual playlist URL
const playlistId = 'PLoROMvodv4rOca_Ovz1DvdtWuz8BfSWL2';
const apiKey = 'AIzaSyDKP5RT0M2hH9sLZZUiPqH9JIV53CTlsoc';

const downloadPlaylist = async () => {
  try {
    const playlistInfoResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`,
    );
    const playlistInfo = await playlistInfoResponse.json();
    console.log('playlistInfo', JSON.stringify(playlistInfo, null, 2));

    // Loop through each video in the playlist
    for (const item of playlistInfo.items) {
      const videoId = item.snippet.resourceId.videoId;
      const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

      const downloadPath = `${RNFS.DocumentDirectoryPath}/${videoId}.mp4`;

      // Check if the video has already been downloaded
      const fileExists = await RNFS.exists(downloadPath);
      if (fileExists) {
        console.log(`Skipping download for video: ${videoId}`);
        continue;
      }

      // Download the video
      const downloadOptions = {
        fromUrl: videoUrl,
        toFile: downloadPath,
      };

      const downloadResult = await RNFS.downloadFile(downloadOptions).promise;

      if (downloadResult.statusCode === 200) {
        console.log(`Successfully downloaded video: ${videoId}`);
      } else {
        console.log(`Failed to download video: ${videoId}`);
      }
    }
  } catch (error) {
    console.error('Error downloading playlist:', error);
  }
};

export const YTPlaylistDownloader = () => {
  useEffect(() => {
    // Run the download function on component mount
    downloadPlaylist();
  }, []);

  return (
    <View>
      <Button title="Download Playlist" onPress={downloadPlaylist} />
    </View>
  );
};
