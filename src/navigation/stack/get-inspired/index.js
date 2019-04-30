
import { createStackNavigator } from 'react-navigation';

import Library from '../../../screen/library';

const routeConfiguration = {
  inspired: { screen: Library }
}

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'inspired'
}

export const ThirdNavigator = createStackNavigator(routeConfiguration, stackNavigatorConfiguration);