import React, { Component } from 'react';

import {Text} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import BananaScreen from './screens/BananaScreen';
import GreetingScreen from './screens/GreetingScreen';
import BlinkScreen from './screens/BlinkScreen';
import LotsOfStyleScreen from './screens/LotsOfStyleScreen';
import FixedDimensionScreen from './screens/FixedDimensionScreen';
import FlexDimensionsScreen from './screens/FlexDimensionsScreen';

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
    Blink: {
      screen: BlinkScreen
    },
    LotsOfStyle: {
      screen: LotsOfStyleScreen
    },
    FixedDimension: {
      screen: FixedDimensionScreen
    },
    FlexDimensions: {
      screen: FlexDimensionsScreen
    }
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
