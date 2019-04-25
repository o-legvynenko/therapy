
import { combineReducers } from 'redux';

import { tabBarReducer } from '../navigation/tabbar/config';
import { FirstNavigation } from '../navigation/stack/library';
import { SecondNavigation } from '../navigation/stack/create';
import { ThirdNavigation } from '../navigation/stack/get-inspired';
import { ForthNavigation } from '../navigation/stack/notification';
import { FifthNavigation } from '../navigation/stack/profile';

export default combineReducers({
  tabBar: tabBarReducer,
  firstTab: (state, action) => FirstNavigation.router.getStateForAction(action, state),
  secondTab: (state, action) => SecondNavigation.router.getStateForAction(action, state),
  thirdTab: (state, action) => ThirdNavigation.router.getStateForAction(action, state),
  forthTab: (state, action) => ForthNavigation.router.getStateForAction(action, state),
  fifthTab: (state, action) => FifthNavigation.router.getStateForAction(action, state),
});