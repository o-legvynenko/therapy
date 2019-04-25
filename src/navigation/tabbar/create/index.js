
import { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import SecondNavigation from '../../stack/create'

class SecondTabNavigation extends Component {

  static navigationOptions = {
    tabBarLabel: 'Create',
    tabBarIcon: ({ tintColor }) => <Icon size={24} name='book' color={tintColor}/>
  }

  render() {
    const { navigationState, dispatch } = this.props
    return (
      <SecondNavigation
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
    navigationState: state.secondTab
  }
}

export default connect(mapStateToProps)(SecondTabNavigation)