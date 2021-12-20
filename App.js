import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textbold}>Mr.nattakarn inti!</View>
      <Text>Mr.nattakarn inti!</Text>
      <Text>Mr.nattakarn inti!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCC66',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbold: {
    color: '#FF6633',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
