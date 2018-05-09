import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Bananas from './components/Bananas';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Text>Hello world!</Text>
        <Bananas></Bananas>
      </View>
    );
  }
}
