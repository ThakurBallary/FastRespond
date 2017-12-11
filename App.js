import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './components/Login';
import Profile from './components/Profile';
import XamprGame from './components/XamprGame';
import ListItem from './components/ListItem';

const App = StackNavigator(
  {
    // Login: { screen: Login },
    // Profile: { screen: Profile },
    // XamprGame: { screen: XamprGame },
    ListItem: { screen: ListItem }
  },
  {
    navigationOptions: {
      header: false,
    }
  }
);

export default App;
