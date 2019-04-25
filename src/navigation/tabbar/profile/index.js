
import { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import FifthNavigation from '../../stack/profile'

class FifthTabNavigation extends Component {

  static navigationOptions = {
    tabBarLabel: 'My Profile',
    tabBarIcon: ({ tintColor }) => <Icon size={24} name='user-circle-o' color={tintColor}/>
  }

  render() {
    const { navigationState, dispatch } = this.props
    return (
      <FifthNavigation
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
    navigationState: state.fifthTab
  }
}

export default connect(mapStateToProps)(FifthTabNavigation)