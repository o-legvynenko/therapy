
import { createStackNavigator } from 'react-navigation';

import Library from '../../../screen/library';

const routeConfiguration = {
  notification: { screen: Library }
}

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'notification'
}

export const ForthNavigator = createStackNavigator(routeConfiguration, stackNavigatorConfiguration);