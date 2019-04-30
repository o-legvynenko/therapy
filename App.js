
import React, { Component } from 'react';
import {  createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/store';
import { AppNavigator } from './src';

const AppNavigation = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}