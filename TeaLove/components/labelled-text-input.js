import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';

const styles = {
  label: {},
  input: {}
};

class LabelledTextInput extends Component {
  render() {
    const { label, ...rest } = this.props;

    return (
      <View style={{
        alignSelf: 'stretch',
        marginTop: 5,
        marginBottom: 5,
      }}>
        <TouchableWithoutFeedback
          activeOpacity={0.9}
          onPress={() => this.refs.theInput.focus()}
        >
          <View>
            <Text style={styles.label}>{label}</Text>
          </View>
        </TouchableWithoutFeedback>
        <TextInput
          {...rest}
          ref="theInput"
          style={{
            marginTop: 5,
            height: 40,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1,
          }}
        />
      </View>
    );
  }
}

LabelledTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default LabelledTextInput;
