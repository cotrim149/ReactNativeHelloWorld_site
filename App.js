import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView } from 'react-native';

import Bananas from './components/Bananas';
import Greetings from './components/Greetings';
import Blink from './components/Blink';
import LotsOfStyle from './components/LotsOfStyle';

import FixedDimensions from './components/FixedDimensionsBasics';
import FlexDimensions from './components/FlexDimensionsBasics';
import FlexDirection from './components/FlexDirection';
import JustifyContentBasics from './components/JustifyContentBasics';
import AlignItems from './components/AlignItems';

export default class HelloWorldApp extends Component {
  render() {
    return (

      <ScrollView>
        <Text>Hello world!</Text>
        <Bananas></Bananas>

        <Greetings name='Jaina'/>
        <Greetings name='Cotrim'/>

        <Blink text={'Blinking TEXT!'} />

        <LotsOfStyle/>
        <Text>Flex lessons</Text>
        <FixedDimensions/>
        <FlexDimensions/>

        <Text>Flex: Direction</Text>
        <FlexDirection/>

        <Text>Flex: Justify content </Text>
        <JustifyContentBasics/>

        <Text>Flex: Align Items</Text>
        <AlignItems/>

      </ScrollView>
    );
  }
}
