import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

function withUserData(WrappedComponent) {
  return class WithUserData extends Component {
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
      return (
        <WrappedComponent token={this.state.token} user={this.state.user} {...this.props} />
      );
    }
  };
}

export default withUserData;
