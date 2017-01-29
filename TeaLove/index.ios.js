import React from 'react';
import { AppRegistry, StyleSheet, Navigator, View } from 'react-native';
import Login from './components/login';
import Home from './components/home';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

const TeaLove = () => (
  <View style={styles.container}>
    <Navigator
      initialRoute={{ title: 'Home' }}
      renderScene={(route, navigator) => {
        switch (route.title) {
          case 'Login':
            return <Login toHome={() => navigator.push({ title: 'Home' })} />;
          case 'Home':
            return <Home />;
          default: throw new Error(`Tried to navigate to a bad route '${route.title}'`);
        }
      }} />
  </View>
);

AppRegistry.registerComponent('TeaLove', () => TeaLove);

export default TeaLove;
