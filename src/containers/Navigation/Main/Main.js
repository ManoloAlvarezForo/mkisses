import HomeScreen from '../../../components/Home/Home';
import ProductListScreen from '../../../components/Product/ProductList';

import SideBar from '../SideBar/SideBar';
import { createDrawerNavigator } from "react-navigation";
import { Dimensions } from 'react-native'

const {width} = Dimensions.get('window');

const MainScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen},
    Products: { screen: ProductListScreen, navigationOptions: ({ navigation }) => ({
      title: 'Product\'s Shop'
    })}
  },
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: SideBar,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: width - 50,
    contentOptions: {
      activeBackgroundColor: '#FF006E',
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      labelStyle: {
        textAlign: 'center',
        alignSelf: 'flex-start',
        width: width - 90,
        fontSize: 20,
        fontWeight: '300'
      }
    }
  }
);


export default MainScreenRouter;