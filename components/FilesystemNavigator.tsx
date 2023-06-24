import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';
import RNFS, {ReadDirItem} from 'react-native-fs';

const FileSystemNavigator = () => {
  const [currentPath, setCurrentPath] = useState(RNFS.DocumentDirectoryPath);
  const [files, setFiles] = useState<ReadDirItem[]>([]);
  const [newFileName, setNewFileName] = useState('');
  const [newFolderName, setNewFolderName] = useState('');

  useEffect(() => {
    loadFiles(currentPath);
  }, [currentPath]);

  const loadFiles = (path: string): void => {
    RNFS.readDir(path)
      .then((result: ReadDirItem[]) => {
        setFiles(result);
      })
      .catch((error: Error) => {
        console.error('Error reading directory:', error);
      });
  };

  const handleItemClick = (item: ReadDirItem): void => {
    if (item.isDirectory()) {
      setCurrentPath(item.path);
    } else {
      // Handle file click here
    }
  };

  const handleGoBack = (): void => {
    const parentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
    setCurrentPath(parentPath);
  };

  const handleAddFile = (): void => {
    if (newFileName.trim() === '') {
      console.error('Please enter a valid file name.');
      return;
    }

    const filePath = `${currentPath}/${newFileName}`;
    const fileContent = 'Hello, World!';

    RNFS.writeFile(filePath, fileContent, 'utf8')
      .then(() => {
        loadFiles(currentPath); // Refresh file list
        setNewFileName(''); // Clear input field
      })
      .catch((error: Error) => {
        console.error('Error creating file:', error);
      });
  };

  const handleAddFolder = (): void => {
    if (newFolderName.trim() === '') {
      console.error('Please enter a valid folder name.');
      return;
    }

    const folderPath = `${currentPath}/${newFolderName}`;

    RNFS.mkdir(folderPath)
      .then(() => {
        loadFiles(currentPath); // Refresh file list
        setNewFolderName(''); // Clear input field
      })
      .catch((error: Error) => {
        console.error('Error creating folder:', error);
      });
  };

  const getFileIcon = (item: ReadDirItem): string => {
    return item.isDirectory() ? '📁' : '📄';
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.goBackButton}>
        <Text style={styles.goBackText}>⬅️ Go Back</Text>
      </TouchableOpacity>
      <ScrollView>
        {files.map((item: ReadDirItem) => (
          <TouchableOpacity
            key={item.path}
            onPress={() => handleItemClick(item)}
            style={styles.itemContainer}>
            <Text style={styles.icon}>{getFileIcon(item)}</Text>
            <Text style={styles.fileName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter file name"
          value={newFileName}
          onChangeText={text => setNewFileName(text)}
        />
        <Button title="Add File" onPress={handleAddFile} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter folder name"
          value={newFolderName}
          onChangeText={text => setNewFolderName(text)}
        />
        <Button title="Add Folder" onPress={handleAddFolder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  goBackText: {
    fontSize: 18,
    marginLeft: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    fontSize: 18,
    marginRight: 5,
  },
  fileName: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default FileSystemNavigator;
