
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import TabBarNavigation from './src/navigation/tabbar';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabBarNavigation />
      </Provider>
    );
  }
}