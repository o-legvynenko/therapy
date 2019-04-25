
import { StackNavigator } from 'react-navigation';

import Library from '../../../screen/library';

const routeConfiguration = {
  library: { screen: Library }
}

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'library'
}

export const FirstNavigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration);