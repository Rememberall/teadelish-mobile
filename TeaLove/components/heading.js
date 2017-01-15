import React, { PropTypes } from 'react';
import { Text } from 'react-native';

const Heading = ({ children, style, ...rest }) => (
  <Text style={{ fontSize: 24, ...style }} {...rest}>
    {children}
  </Text>
);

Heading.propTypes = {
  style: PropTypes.object,
};

export default Heading;
