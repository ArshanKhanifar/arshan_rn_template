import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {User} from '@react-native-google-signin/google-signin';
import userFallback from '../assets/user-fallback-icon.png';

const GoogleProfile = ({user}: {user: User['user']}) => {
  return (
    <View style={styles.container}>
      {user.photo ? (
        <Image source={{uri: user.photo}} style={styles.photo} />
      ) : (
        <Image source={userFallback} style={styles.photo} />
      )}
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default GoogleProfile;
