import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Login from './components/login';

const TeaLove = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      TeaLove!
    </Text>
    <Login />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('TeaLove', () => TeaLove);
