
import { combineReducers } from 'redux';

import { tabBarReducer } from '../navigation/tabbar/config';
import { FirstNavigator } from '../navigation/stack/library';
import { SecondNavigator } from '../navigation/stack/create';
import { ThirdNavigator } from '../navigation/stack/get-inspired';
import { ForthNavigator } from '../navigation/stack/notification';
import { FifthNavigator } from '../navigation/stack/profile';

export default combineReducers({
  tabBar: tabBarReducer,
  firstTab: (state, action) => FirstNavigator.router.getStateForAction(action, state),
  secondTab: (state, action) => SecondNavigator.router.getStateForAction(action, state),
  thirdTab: (state, action) => ThirdNavigator.router.getStateForAction(action, state),
  forthTab: (state, action) => ForthNavigator.router.getStateForAction(action, state),
  fifthTab: (state, action) => FifthNavigator.router.getStateForAction(action, state),
});