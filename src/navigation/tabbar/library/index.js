
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FirstNavigator } from '../../stack/library'

class FirstTabNavigation extends Component {

  static navigationOptions = {
    tabBarLabel: 'Library',
    tabBarIcon: ({ tintColor }) => <Icon size={24} name='book' color={tintColor}/>
  }

  render() {
    const { navigationState, dispatch } = this.props
    return (
      <FirstNavigator
        navigation={{
          dispatch: dispatch,
          state: navigationState
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    navigationState: state.firstTab
  }
}

export default connect(mapStateToProps)(FirstTabNavigation)