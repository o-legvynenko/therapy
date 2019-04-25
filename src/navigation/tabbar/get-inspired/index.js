
import { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import ThirdNavigation from '../../stack/get-inspired';

class ThirdTabNavigation extends Component {

  static navigationOptions = {
    tabBarLabel: 'Get Inspired',
    tabBarIcon: ({ tintColor }) => <Icon size={24} name='search' color={tintColor}/>
  }

  render() {
    const { navigationState, dispatch } = this.props
    return (
      <ThirdNavigation
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
    navigationState: state.thirdTab
  }
}

export default connect(mapStateToProps)(ThirdTabNavigation)