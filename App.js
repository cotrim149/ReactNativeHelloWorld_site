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

import PizzaTranslator from './components/PizzaTranslator';

import ButtonBasics from './components/ButtonBasics';
import Touchables from './components/Touchables';

import ScrollPages from './components/ScrollPages';

export default class HelloWorldApp extends Component {
  render() {
    return (

      <ScrollView style = {{marginTop: 20}}>

        <Text>Touchables buttons</Text>
        <Touchables/>

        <Text>Basics of Button</Text>
        <ButtonBasics/>

        <Text>Pizza Translator</Text>
        <PizzaTranslator/>

        <Text>Flex: Align Items</Text>
        <AlignItems/>

        <Text>Flex: Justify content </Text>
        <JustifyContentBasics/>

        <Text>Flex: Direction</Text>
        <FlexDirection/>

        <Text>Flex lessons</Text>
        <FlexDimensions/>
        <FixedDimensions/>

        <LotsOfStyle/>

        <Blink text={'Blinking TEXT!'} />

        <Greetings name='Cotrim'/>
        <Greetings name='Jaina'/>

        <Bananas></Bananas>
        <Text>Hello world!</Text>
      </ScrollView>
    );
  }
}
