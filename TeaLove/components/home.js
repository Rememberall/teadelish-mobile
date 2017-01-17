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
            <Image
              style={{
                height: 30,
                width: 30,
              }}
              source={require('../images/teacup.png')}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 35,
                textAlign: 'center',
                marginTop: -7,
              }}
            >
              +
            </Text>

          </View>
          <View>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                marginTop: 2,
              }}
            >
              ≡
            </Text>
          </View>
          <View>
            <Image
              style={{
                height: 40,
                width: 40,
                marginTop: -4,
              }}
              source={require('../images/chart.png')}
            />
          </View>
        </View>
        <View>
          <Text style={{
            textAlign: 'center',
          }}>
            Bullock Holmes
          </Text>
        </View>
        <View
          style={{
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