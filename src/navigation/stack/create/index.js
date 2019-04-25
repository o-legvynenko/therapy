
import { StackNavigator } from 'react-navigation';

import Library from '../../../screen/library';

const routeConfiguration = {
  create: { screen: Library }
}

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'create'
}

export const SecondNavigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration);