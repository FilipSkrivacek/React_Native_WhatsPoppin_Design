import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

//pages
import HomeScreen from "../Pages/HomeScreen.jsx";
import SettingsScreen from "../Pages/SettingsScreen.jsx";
import AddScreen from "../Pages/AddScreen";
import DetailsScreen from "../Pages/DetailsScreen.jsx";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Události" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Události") {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === "Nastavení") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (rn === "Přidat událost") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#A9D6E5",
          },
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="Události" component={HomeStack} />
        <Tab.Screen name="Nastavení" component={SettingsScreen} />
        <Tab.Screen name="Přidat událost" component={AddScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
