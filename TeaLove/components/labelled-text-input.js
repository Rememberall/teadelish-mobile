import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';

const styles = {
  label: {},
  input: {},
};

class LabelledTextInput extends Component {
  render() {
    const { label, ...rest } = this.props;

    return (
      <View
        style={{
          alignSelf: 'stretch',
          marginTop: 5,
          marginBottom: 5,
        }}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          {...rest}
          style={{
            marginTop: 5,
            height: 40,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1,
          }} />
      </View>
    );
  }
}

LabelledTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};

export default LabelledTextInput;
