import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { AppHeader } from './common/AppHeader';

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
        <AppHeader navigation={(this.props as any).navigation} />
        <View style={styles.content}>
          <Text style={styles.instructions}>{instructions}</Text>
          <Button title="Friends" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 30
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 30
  }
});
