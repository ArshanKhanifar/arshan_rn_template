import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import RNFS, {DownloadFileOptions} from 'react-native-fs';
import FileSystemNavigator from './FilesystemNavigator';

const VideoURLDownloader = () => {
  const [url, setUrl] = useState('');
  const [fileName, setFileName] = useState('');

  const handleDownload = async () => {
    try {
      const filePath = `${RNFS.DocumentDirectoryPath}/${fileName}`;

      const options: DownloadFileOptions = {
        fromUrl: url,
        toFile: filePath,
        background: true,
        begin: () => {
          console.log('Download has begun');
        },
        progress: res => {
          const progress = res.bytesWritten / res.contentLength;
          console.log(`Download progress: ${progress}%`);
        },
      };

      const download = RNFS.downloadFile(options);
      const res = await download.promise;

      if (res.statusCode === 200) {
        console.log('File downloaded successfully!');
      } else {
        console.log('File download failed!');
      }
    } catch (error) {
      console.log('Error occurred during download', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter video URL"
        onChangeText={text => setUrl(text)}
        value={url}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter file name"
        onChangeText={text => setFileName(text)}
        value={fileName}
      />
      <Button title="Download" onPress={handleDownload} />
      <FileSystemNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 8,
  },
});

export default VideoURLDownloader;
