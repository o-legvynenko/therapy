
import { createStackNavigator } from 'react-navigation';

import Intro from './screen/intro';
import TabBarNavigation from './navigation/tabbar';

const routeConfiguration = {
  intro: { screen: Intro },
  home: { screen: TabBarNavigation }
}

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'intro'
}

export const AppNavigator = createStackNavigator(routeConfiguration, stackNavigatorConfiguration);