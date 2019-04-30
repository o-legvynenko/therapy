
import { createBottomTabNavigator } from 'react-navigation';

import FirstTabNavigation from './library';
import SecondTabNavigation from './create';
import ThirdTabNavigation from './get-inspired';
import ForthTabNavigation from './notification';
import FifthTabNavigation from './profile';

const routeConfiguration = {
  first: { screen: FirstTabNavigation },
  second: { screen: SecondTabNavigation },
  third: { screen: ThirdTabNavigation },
  forth: { screen: ForthTabNavigation },
  fifth: { screen: FifthTabNavigation }
}

const tabBarConfiguration = {
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    labelStyle: {
      textTransform: 'uppercase',
      fontSize: 10
    },
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowOpacity: 0.5,
      elevation: 5
    },
    lazy: true
  }
}

export const TabBar = createBottomTabNavigator(routeConfiguration,tabBarConfiguration);

export const tabBarReducer = (state,action) => {
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, index: 0 }
  } else {
    return TabBar.router.getStateForAction(action,state)
  }
}