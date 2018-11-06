import { 
  createStackNavigator,
  createSwitchNavigator 
} from 'react-navigation';

import AuthLoadingScreen from './src/components/Authentication/AuthLoadingScreen/AuthLoadingScreen';
import LoginScreen from './src/components/Authentication/Login/Login';
import HomeScreen from './src/components/Home/Home';
import SignInScreen from './src/components/Authentication/SignIn/SignIn';

const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({ Login: LoginScreen, SignIn: SignInScreen});

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