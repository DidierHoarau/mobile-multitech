import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';
import PropTypes from 'prop-types';

export class AppHeader extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };
  static propTypes: { navigation: PropTypes.Validator<object> };
  render() {
    return (
      <View>
        <Header
          containerStyle={{
            backgroundColor: '#00796B',
            justifyContent: 'space-around'
          }}
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => (this.props as any).navigation.toggleDrawer()
          }}
          centerComponent={{ text: 'AwsomeApp', style: { color: '#fff' } }}
        />
      </View>
    );
  }
}

AppHeader.propTypes = {
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  content: {
    padding: 30
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 30
  }
});
