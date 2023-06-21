import React from 'react';
import {View, Image, Text} from 'react-native';

const GoogleProfile = ({user}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: user.photo}} style={styles.photo} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
};

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
  },
};

export default GoogleProfile;
