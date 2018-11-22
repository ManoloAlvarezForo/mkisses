import HomeScreen from '../../../components/Home/Home';
import SideBar from '../SideBar/SideBar';
import { createDrawerNavigator } from "react-navigation";

const MainScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: SideBar,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
);


export default MainScreenRouter;