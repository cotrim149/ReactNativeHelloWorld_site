import React, { Component } from 'react';

import {Text} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';

const RootStack = createStackNavigator({
  App: {
    screen: HomeScreen
  },
});
export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
