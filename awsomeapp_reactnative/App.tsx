import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen } from './components/HomeScreen';
import { FriendListScreen } from './components/FriendListScreen';

const MainNavigator = createDrawerNavigator({
  Home: { screen: HomeScreen },
  FriendList: { screen: FriendListScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
