import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ListView } from 'react-native';
import Heading from './heading';
import withUserData from './with-user-data';
import userDataPropTypes from './user-data-prop-types';
import LabelledTextInput from './labelled-text-input';

const teasListDataSourceDefinition = new ListView.DataSource({
  rowHasChanged: (left, right) => left !== right,
});

function checkin(username, token, teaId) {
  return fetch(`http://localhost:3000/users/${username}/checkins`, {
    method: 'POST',
    headers: {
      'X-Token': token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ teaId }),
  });

  // TODO: Navigate back to list (or to the checkin details)
}

class NewCheckin extends Component {
  constructor() {
    super();

    this.state = {
      teas: null,
    };

    this.updateOptions = this.updateOptions.bind(this);
    this.search = this.search.bind(this);
  }

  updateOptions(teas) {
    const teasListDataSource = teasListDataSourceDefinition.cloneWithRows(teas);
    this.setState({ teas, teasListDataSource });
  }

  componentWillMount() {
    fetch('http://localhost:3000/teas')
      .then(res => res.json())
      .then(this.updateOptions);
  }

  search(query) {
    fetch(`http://localhost:3000/teas?query=${query}`)
      .then(res => res.json())
      .then(this.updateOptions);
  }

  render() {
    const { token, user } = this.props;
    const { teas } = this.state;

    return (
      <View>
        <View style={{ marginBottom: 20 }}>
          <Heading>New checkin</Heading>
        </View>
        {teas && (
          <View>
            <LabelledTextInput
              onChangeText={this.search}
              label="Search"
            />
            <ListView
              enableEmptySections
              dataSource={this.state.teasListDataSource}
              renderRow={({ id, brand, name }) => (
                <TouchableHighlight
                  activeOpacity={0.5}
                  disabled={!user}
                  underlayColor="lightgray"
                  onPress={() => checkin(user.username, token, id)}
                  style={{
                    backgroundColor: 'yellow',
                    marginBottom: 10,
                    borderWidth: 1,
                  }}>
                  <View
                    key={id} style={{
                      padding: 10,
                    }}
                  >
                    <Text>{brand}: {name}</Text>
                  </View>
                </TouchableHighlight>
              )} />
          </View>
        )}
        {!teas && (
          <Text>Loading options…</Text>
        )}
      </View>
    );
  }
}

NewCheckin.propTypes = {
  ...userDataPropTypes,
};

export default withUserData(NewCheckin);
