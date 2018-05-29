import React, {Component} from 'react';
import {View} from 'react-native';

import FixedDimension from '../components/FixedDimensionsBasics';

export default class FixedDimensionScreen extends Component {
  static navigationOptions = {
    title: 'Fixed Dimensions'
  }

  render() {
    return(
      <View>
        <FixedDimension/>        
      </View>
    );
  }
}