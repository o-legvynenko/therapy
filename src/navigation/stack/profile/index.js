
import { StackNavigator } from 'react-navigation';

import Library from '../../../screen/library';

const routeConfiguration = {
  profile: { screen: Library }
}

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'profile'
}

export const FifthNavigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration);