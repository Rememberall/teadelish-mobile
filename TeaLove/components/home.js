import React, { Component } from 'react';
import { AsyncStorage, View, Text } from 'react-native';
import Heading from './heading';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      message: null,
    };
  }

  componentWillMount() {
    AsyncStorage.getItem('@TeaLove:token')
      .then(token => this.setState({ token }))
      .catch(err => this.setError({ message: err.message }));
  }

  render() {
    const { token, message } = this.state;

    return (
      <View>
        <Heading>Hello</Heading>
        <Text>{token || 'loading…'}</Text>
        {message && <Text>{message}</Text>}
      </View>
    );
  }
}

export default Home;
