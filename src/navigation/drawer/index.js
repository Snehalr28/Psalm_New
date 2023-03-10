import { createDrawerNavigator } from '@react-navigation/drawer';
import Article from '../../screens/drawerScreen/Article';
import Feed from '../../screens/drawerScreen/Feed';
import { AppNavigator } from '../AppNavigator';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomDraw from "./customDrawer"

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Drawer.Screen name="Home" component={AppNavigator}  />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation
const styles = StyleSheet.create({
    drawerHeader: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#222',
      height: 150,
    },
    logo: {
      width: 80,
      height: 80,
      borderRadius: 40,
    },
    drawerHeaderText: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft: 10,
    },
  });
  