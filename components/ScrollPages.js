import React, { Component } from 'react';
import {
  ScrollView, 
  View,
  StyleSheet,
} from 'react-native';

class ScrollPages extends Component {

  render() {
    return(
      <View>
        <ScrollView horizontal>
          <View style = {styles.view1}></View>
          <View style = {styles.view2}></View>
          <View style = {styles.view3}></View>
        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  scroll: {
    flex: 1
  },
  view1: {
    backgroundColor: '#00F',
  },
  view2: {
    backgroundColor: '#0F0',
  },
  view3: {
    backgroundColor: '#F00',
  },
});