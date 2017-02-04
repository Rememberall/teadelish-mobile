import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import Heading from '../heading';
import CheckinSummary from '../checkin-summary';
import timeOfDay from '../../lib/time-of-day';
import voldemort from '../../images/voldemort.jpg';
import { teacup, chart } from '../../style/icons';
import NavigationBarInstrument from './navigation-bar-instrument';
import withUserData from '../with-user-data';
import userDataPropTypes from '../user-data-prop-types';

class Home extends Component {
  render() {
    const { user } = this.props;

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
                {user.checkins.slice(user.checkins.length - 3).map(checkin => (
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
        <NavigationBarInstrument />
      </View>
    );
  }
}

Home.propTypes = {
  ...userDataPropTypes,
};

export default withUserData(Home);
