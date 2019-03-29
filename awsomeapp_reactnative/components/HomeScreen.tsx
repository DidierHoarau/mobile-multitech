import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button, Header } from 'react-native-elements';

const instructions = Platform.select({
  ios: 'Welcome to AwsomeApp for iOS!',
  android: 'Welcome to AwsomeApp for Android!'
});

type Props = {};

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'AwsomeApp', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Button title="Start" />
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
