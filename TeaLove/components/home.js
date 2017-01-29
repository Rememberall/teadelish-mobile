import React, { Component } from 'react';
import { AsyncStorage, View, Text, Image } from 'react-native';
import Heading from './heading';
import CheckinSummary from './checkin-summary';
import timeOfDay from '../lib/time-of-day';
import voldemort from '../images/voldemort.jpg';
import teacup from '../images/teacup.png';
import chart from '../images/chart.png';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      user: null,
    };
  }

  componentWillMount() {
    AsyncStorage.getItem('@TeaLove:token')
      .then((token) => {
        this.setState({ token });
        return token;
      })
      .then(token => fetch('http://localhost:3000/me', {
        headers: { 'X-Token': token },
      }))
      .then(res => res.json())
      .then(user => this.setState({ user }));
  }

  render() {
    const { user } = this.state;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{
                height: 150,
                width: 150,
                borderRadius: 75,
              }}
              source={voldemort} />
            <View>
              {!user && <Text>Loading your information…</Text>}
              {user && <Heading>Good {timeOfDay()}, {user.username}!</Heading>}
            </View>
          </View>
          <View
            style={{
              maxHeight: 35,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View>
              <Image
                style={{
                  height: 30,
                  width: 30,
                }}
                source={teacup} />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 35,
                  textAlign: 'center',
                  marginTop: -7,
                }}>
                +
              </Text>

            </View>
            <View>
              <Text
                style={{
                  fontSize: 30,
                  textAlign: 'center',
                  marginTop: 2,
                }}>
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
                source={chart} />
            </View>
          </View>
        </View>
        <View style={{ marginTop: 20, flex: 1 }}>
          {!user && (
            <Text style={{ textAlign: 'center' }}>Loading checkins…</Text>
          )}
          {user && (
            <View>
              <Text style={{ fontSize: 24 }}>Latest checkins</Text>
              <View style={{ marginTop: 10 }}>
                {user.checkins.slice(0, 4).map(checkin => (
                  <View key={checkin.timestamp} style={{ marginTop: 3, marginBottom: 3 }}>
                    <CheckinSummary
                      onPress={() => {}}
                      {...checkin} />
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
        <View
          style={{
            maxHeight: 35,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
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
