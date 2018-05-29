import React, {Component} from 'react';

import {
  Text,
  View,
  ScrollView,
  Button,
 } from 'react-native';

import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

import Bananas from '../components/Bananas';
import Greetings from '../components/Greetings';
import Blink from '../components/Blink';
import LotsOfStyle from '../components/LotsOfStyle';

import FixedDimensions from '../components/FixedDimensionsBasics';
import FlexDimensions from '../components/FlexDimensionsBasics';
import FlexDirection from '../components/FlexDirection';
import JustifyContentBasics from '../components/JustifyContentBasics';
import AlignItems from '../components/AlignItems';

import PizzaTranslator from '../components/PizzaTranslator';

import ButtonBasics from '../components/ButtonBasics';
import Touchables from '../components/Touchables';

import ScrollPages from '../components/ScrollPages';


export default class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return ({
      title: 'Playground Home',
      // If you want to put a image in place of title, uncomment line bellow
      // headerTitle: <LogoTitle />,
      // headerLeft: (
      //   <Button
      //     onPress={() => navigation.navigate('MyModal')}
      //     title="Info"
      //     color="#fff"
      //   />
      // ),
      // headerBackTitle: 'Voltar',
      // headerRight: (
      //   <Button onPress={params.increaseCount} title="+1" color="#fff" />
      // ),
    });
  };


  render(){
    return(
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
      <View style={{ flexDirection: 'row' ,justifyContent: 'space-around'}}>
        <Button title='Fixed Dimension' onPress= {() => {
          this.props.navigation.navigate('FixedDimension');
        }}/>      
        <Button title='Flex Dimension' onPress= {() => {
          this.props.navigation.navigate('FlexDimensions');
        }}/>
      </View>


      <FlexDimensions/>

      <Button title = 'Lots of Style' onPress = {() => {
        this.props.navigation.navigate('LotsOfStyle');
      }}/>

      <Button title='Blink' onPress= {() => {
        this.props.navigation.navigate('Blink');
      }}/>

      <Button title='Greetings' onPress = {() => {
        this.props.navigation.navigate('Greeting');
      }}/>

      <Button title='Banana Screen' onPress = {() => {
        this.props.navigation.navigate('Banana');
      }} />
    </ScrollView>
    );
  }
}