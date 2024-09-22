import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoryScreen from './screens/CategoryScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import MealInfoScreen from './screens/MealInfoScreen'; 
import FavoritesScreen from './screens/FavoritesScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="Categories" component={CategoryScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Meals" component={MealDetailScreen} options={{ title: "Danh sách món ăn"}}/>
      <Stack.Screen name="MealInfo" component={MealInfoScreen} options={{ title: "Chi tiết món ăn"}}/>
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      
      <Drawer.Navigator >
        <Drawer.Screen name="Trang chủ" component={MealsNavigator} />
        <Drawer.Screen name="Yêu thích" component={FavoritesScreen} />
        <Drawer.Screen name="Cài đặt" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;