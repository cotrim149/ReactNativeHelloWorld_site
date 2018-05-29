import React, {Component} from 'react';
import {View} from 'react-native';

import Blink from '../components/Blink';

export default class BlinkScreen extends Component {

  static navigationOptions = {
    title: 'Blink'
  };
  
  render() {
    return(
      <View style = {{ flex: 1, alignItems: 'center'}}>
        <Blink text={'Texto piscando a cada 1 segundo!'}/>
      </View>
    );
  }
}