import {Platform, Dimensions} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeScreen from '../components/HomeScreen';
import ProfileScreen from '../components/ProfileScreen';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.83,
};

const DrawerNavigator = createDrawerNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

export default DrawerNavigator;
