import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Image, View, TextInput } from 'react-native';

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
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    let pic = {
      uri: 'https://bnetproduct-a.akamaihd.net//dg/7364/334651FFB5510B42E53C9C61CFC413378201C32D.png'
    };
    // prop can be whatever name, dog for example
    // first view is a pizza translator
    return (
      <View style={{flex: 1}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        <View style={{flex: 1, alignItems: 'center', backgroundColor: 'powderblue'}}>
          <Greeting name="Rafael" />
        </View>
        <View style={{flex: 2, alignItems: 'center', backgroundColor: 'skyblue'}}>
          <Image source={pic} style={{width: 193, height: 110}}/>
        </View>
        <View style={{flex: 3, alignItems: 'center', backgroundColor: 'steelblue'}}>
          <Blink dog='BLINKING! :P' />
        </View>
        <View style={{width: 80, height: 80, alignItems: 'center', backgroundColor: 'powderblue'}} />
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeStudy', () => MyComponent);