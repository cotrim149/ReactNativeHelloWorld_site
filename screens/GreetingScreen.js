import React, {Component} from 'react';
import {View} from 'react-native';

import Greetings from '../components/Greetings';

export default class GreetingScreen extends Component {

  static navigationOptions = {
    title: 'Greetings',
  };

  render() {
    return(
      <View>
        <Greetings name='Cotrim'/>
        <Greetings name='Jaina'/>
      </View>
    );
  }

}