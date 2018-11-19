import { 
  createStackNavigator,
  createSwitchNavigator 
} from 'react-navigation';

import AuthLoadingScreen from './src/components/Authentication/AuthLoadingScreen/AuthLoadingScreen';
import HomeScreen from './src/components/Home/Home';
import AuthenticationSelect from './src/components/Authentication/AuthenticationSelect/AuthenticationSelect';
import LoginScreen from './src/components/Authentication/Login/Login';
import SignUpScreen from './src/components/Authentication/SignUp/SignUp';

const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({ AuthSelect: AuthenticationSelect, Login: LoginScreen, SignUp: SignUpScreen});

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