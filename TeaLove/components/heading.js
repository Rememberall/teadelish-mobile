import React from 'react';
import { Text } from 'react-native';

const Heading = ({ children, ...rest }) => (
  <Text style={{ fontSize: 24 }} {...rest}>
    {children}
  </Text>
);

export default Heading;
