import {
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

// Screens.
import AuthLoadingScreen from './src/components/Authentication/AuthLoadingScreen/AuthLoadingScreen';
import MainScreen from './src/containers/Navigation/Main/Main';
import AuthenticationSelect from './src/components/Authentication/AuthenticationSelect/AuthenticationSelect';
import LoginScreen from './src/components/Authentication/Login/Login';
import SignUpScreen from './src/components/Authentication/SignUp/SignUp';

const AppStack = createStackNavigator(
  {
    Main: MainScreen
  },
  {
    headerMode: 'none'
  });

const AuthStack = createStackNavigator(
  {
    AuthSelect: AuthenticationSelect,
    Login: LoginScreen,
    SignUp: SignUpScreen
  },
  {
    headerMode: 'none'
  });

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  }
);