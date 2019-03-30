import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';
import { ListItem } from 'react-native-elements';
import { AppHeader } from './common/AppHeader';

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
];

type Props = {};

export class FriendListScreen extends React.Component {
  static navigationOptions = {
    title: 'Friends'
  };
  render() {
    return (
      <View>
        <AppHeader navigation={(this.props as any).navigation} />
        <View>
          {list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
