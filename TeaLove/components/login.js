import React, { Component, PropTypes } from 'react';
import { View, Text, Button } from 'react-native';
import LabelledTextInput from './labelled-text-input';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: props.initialUsername,
      password: props.initialPassword,
    };
  }

  login(username, password) {
  }

  render() {
    const { username, password } = this.state;

    return (
      <View style={{
        padding: 10,
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'flex-start',
      }}>
        <LabelledTextInput
          label="Username"
          autoFocus
          onChangeText={newUsername => this.setState({ username: newUsername })}
          value={username}
        />
        <LabelledTextInput
          label="Password"
          secureTextEntry
          onChangeText={newPassword => this.setState({ password: newPassword })}
          value={password}
        />
        <Button
          onPress={() => this.login(username, password)}
          title="Sign in"
          color="green"
          backgroundColor="yellow"
          accessibilityLabel="Sign in"
        />

      </View>
    );
  }
}

Login.propTypes = {
  initialUsername: PropTypes.string,
  initialPassword: PropTypes.string,
};

Login.defaultProps = {
  initialUsername: '',
  initialPassword: '',
};

export default Login;
