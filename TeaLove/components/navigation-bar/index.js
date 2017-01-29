import React from 'react';
import { View, Text } from 'react-native';

import style from './style';

const NavigationBar = () => (
  <View style={style.navigationBar}>
    <View>
      <Text>Home</Text>
    </View>
    <View>
      <Text>Search</Text>
    </View>
    <View>
      <Text>Profile</Text>
    </View>
  </View>
);

export default NavigationBar;
