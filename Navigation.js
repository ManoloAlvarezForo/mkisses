import { 
  createStackNavigator,
  createSwitchNavigator 
} from 'react-navigation';

import AuthLoadingScreen from './src/components/Authentication/AuthLoadingScreen/AuthLoadingScreen';
import HomeScreen from './src/components/Home/Home';
import AuthenticationSelect from './src/components/Authentication/AuthenticationSelect/AuthenticationSelect';

const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({ AuthSelect: AuthenticationSelect});

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);