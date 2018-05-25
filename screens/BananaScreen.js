import React, {Component} from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

import Bananas from '../components/Bananas';

export default class BananaScreen extends React.Component {

  static navigationOptions = {
    title: 'Bananas',
  };

  render() {
    return(
      <View style = {{ flex : 1}}>
        <Bananas/>
      </View>
    );
  }
}