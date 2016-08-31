import React, { Component } from 'react';
import { AppRegistry, Text, Image, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class MyComponent extends Component {
  render() {
    let pic = {
      uri: 'https://bnetproduct-a.akamaihd.net//dg/7364/334651FFB5510B42E53C9C61CFC413378201C32D.png'
    };
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name="Rafael" />
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeStudy', () => MyComponent);
