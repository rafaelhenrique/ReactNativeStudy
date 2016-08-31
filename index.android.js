import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text style={styles.darkgreen}>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    // let define var on scope of function
    // ? is ternary operator
    let display = this.state.showText ? this.props.dog : ' ';
    return (
      <Text style={styles.bigred}>{display}</Text>
    );
  }
}

const styles = StyleSheet.create({
  darkgreen: {
    color: '#006400',
    fontWeight: 'bold',
    fontSize: 30,
  },
  bigred: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 40,
  },
});

class MyComponent extends Component {
  render() {
    let pic = {
      uri: 'https://bnetproduct-a.akamaihd.net//dg/7364/334651FFB5510B42E53C9C61CFC413378201C32D.png'
    };
    // prop can be whatever name, dog for example
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name="Rafael" />
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Blink dog='BLINKING! :P' />
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeStudy', () => MyComponent);
