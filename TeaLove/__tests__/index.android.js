import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import Index from '../index.android';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />,
  );

  expect(tree).toMatchSnapshot();
});
