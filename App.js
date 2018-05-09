import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Bananas from './components/Bananas';
import Greetings from './components/Greetings';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Text>Hello world!</Text>
        <Bananas></Bananas>

        <Greetings name='Jaina'/>
        <Greetings name='Cotrim'/>

      </View>
    );
  }
}
