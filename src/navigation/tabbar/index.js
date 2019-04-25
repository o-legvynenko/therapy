
import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { TabBar } from './config';

class TabBarNavigation extends Component {
  render() {
    const { dispatch, navigationState } = this.props;
    return (
      <TabBar
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    navigationState: state.tabBar
  }
}

export default connect(mapStateToProps)(TabBarNavigation);