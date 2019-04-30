
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ForthNavigator } from '../../stack/notification'

class ForthTabNavigation extends Component {

  static navigationOptions = {
    tabBarLabel: 'Notification',
    tabBarIcon: ({ tintColor }) => <Icon size={24} name='envelope' color={tintColor}/>
  }

  render() {
    const { navigationState, dispatch } = this.props
    return (
      <ForthNavigator
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
    navigationState: state.forthTab
  }
}

export default connect(mapStateToProps)(ForthTabNavigation)