
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThirdNavigator } from '../../stack/get-inspired';

class ThirdTabNavigation extends Component {

  static navigationOptions = {
    tabBarLabel: 'Get Inspired',
    tabBarIcon: ({ tintColor }) => <Icon size={24} name='search' color={tintColor}/>
  }

  render() {
    const { navigationState, dispatch } = this.props
    return (
      <ThirdNavigator
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
    navigationState: state.thirdTab
  }
}

export default connect(mapStateToProps)(ThirdTabNavigation)