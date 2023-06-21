import React, {PropsWithChildren} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';

export const CodeBlock = ({children}: PropsWithChildren) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log(children);
        }}>
        <Text style={styles.code}>{children}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    padding: 25,
    marginBottom: 10,
  },
  code: {
    fontFamily: 'Courier',
    fontSize: 14,
    color: '#333',
  },
});
