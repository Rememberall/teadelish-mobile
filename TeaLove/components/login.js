import React, { Component, PropTypes } from 'react';
import { AsyncStorage, View, Text, Button } from 'react-native';
import LabelledTextInput from './labelled-text-input';
import Heading from './heading';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: props.initialUsername,
      password: props.initialPassword,
      errorMessage: null,
    };

    this.login = this.login.bind(this);
  }

  login(username, password) {
    fetch('http://localhost:3000/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(async res => ({
        status: res.status,
        text: await res.text(),
      }))
      .then(({ status, text }) => {
        if (status === 200) {
          return text;
        }

        throw new Error(text);
      })
      .then(token => AsyncStorage.setItem("@TeaLove:token", token))
      .then(this.props.toHome)
      .catch(({ message: errorMessage }) => {
        this.setState({ errorMessage });
      })
  }

  render() {
    const { username, password, errorMessage } = this.state;

    return (
      <View style={{
        flex: 1,
        alignSelf: 'stretch',
      }}>
        <Heading style={{
          alignSelf: 'flex-start',
        }}>
          Sign in!
        </Heading>
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
        {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
        <View style={{ alignSelf: 'flex-end' }}>
          <Button
            onPress={() => this.login(username, password)}
            title="Sign in"
            color="green"
            backgroundColor="yellow"
            accessibilityLabel="Sign in"
          />
        </View>
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
