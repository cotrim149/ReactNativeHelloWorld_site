import React, {Component} from 'react';
import {View} from 'react-native';

import LotsOfStyle from '../components/LotsOfStyle';

export default class LotsOfStyleScreen extends Component {

  static navigationOptions = {
    title: 'Lots Of Style',
  };

  render() {
    return(
      <View style = {{ flex: 1, alignItems: 'center'}}>
        <LotsOfStyle/>>
      </View>
    );
  }
}