import React, { Component } from 'react';

import {Text} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import BananaScreen from './screens/BananaScreen';
import GreetingScreen from './screens/GreetingScreen';

const RootStack = createStackNavigator(
  {
    App: {
      screen: HomeScreen
    },
    Banana: {
      screen: BananaScreen
    },
    Greeting: {
      screen: GreetingScreen
    },
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
