/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert} from 'react-native';

import ImageChooser from './src/components/ImageChooser/ImageChooser';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  selectImage = (image) => {
    console.log("Choosed: ", image);
  }

  release = (images) => {
    Alert.alert(
      'Choose Image!',
      'number of image choice: ' + images.length,
    );
  }

  render() {
    let images = [];
    for(let i = 0; i < 24; i++) {
      images.push('https://facebook.github.io/react-native/docs/assets/favicon.png');
    }

    return (
      <ImageChooser 
        data={images}
        column={3}
        icon={'check'}
        onSelect={this.selectImage}
        onRelease={this.release}
      />
    );
  }
}

