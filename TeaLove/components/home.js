import React, { Component } from 'react';
import { AsyncStorage, View, Text, Image } from 'react-native';
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
      <View style={{
          flex: 1,
        }}>
        <View>
          <Image
            source={require('../images/voldemort.jpg')}
          />
          <Heading>Profile</Heading>
          {message && <Text>{message}</Text>}
        </View>
        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text>Tea</Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: 'center',
              }}
            >
              Addition
            </Text>

          </View>
          <View ><Text>Comments</Text></View>
          <View><Text>Statistics</Text></View>
        </View>
        <View>
          <Text style={{
              textAlign: 'center',
            }}>Bullock Holmes</Text>
        </View>
        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <View><Text>Home</Text></View>
          <View><Text>Search</Text></View>
          <View><Text>Profile</Text></View>
        </View>
      </View>
    );
  }
}

export default Home;
