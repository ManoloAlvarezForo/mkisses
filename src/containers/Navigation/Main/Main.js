import HomeScreen from '../../../components/Home/Home';
import ProfileScreen from '../../../components/Profile';

import SideBar from '../SideBar/SideBar';
import { createDrawerNavigator } from "react-navigation";
import { Dimensions } from 'react-native'

const {width} = Dimensions.get('window');

const MainScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen}
  },
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: SideBar,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: width,
    contentOptions: {
      activeBackgroundColor: '#FF006E',
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      itemsContainerStyle: {
        width: '100%',
      },
      labelStyle: {
        justifyContent: 'center',
        textAlign: 'center',
        paddingLeft: (width / 2) - 50,
        fontSize: 20,
        fontWeight: '300'
      }
    }
  }
);


export default MainScreenRouter;