import React, { Component, PropTypes } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

class CheckinSummary extends Component {
  render() {
    const { onPress, brand, name, timestamp } = this.props;

    return (
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor="lightgray"
        onPress={onPress}>
        <View
          style={{
            padding: 10,
            borderWidth: 1,
          }}>
          <Text>{brand} {name} @ {timestamp}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

CheckinSummary.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CheckinSummary;
