import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

import HomeScreen from "./screen/Home";
import ChatScreen from "./screen/Chat";
import BasketScreen from "./screen/Basket";
import ProfileScreen from "./screen/Profile";

export default function App() {
  return (
    <NavigationContainer>
      {
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused, color }) => (
                <FontAwesome5
                  name={focused ? "search" : "search"}
                  size={24}
                  color={focused ? color : "tintColor"}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Basket"
            component={BasketScreen}
            options={{
              tabBarIcon: ({ focused, color }) => (
                <FontAwesome5
                  name={focused ? "shopping-basket" : "shopping-basket"}
                  size={24}
                  color={focused ? color : "tintColor"}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Chat"
            component={ChatScreen}
            options={{
              tabBarIcon: ({ focused, color }) => (
                <FontAwesome5
                  name={focused ? "comments" : "comments"}
                  size={24}
                  color={focused ? color : "tintColor"}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ focused, color }) => (
                <FontAwesome5
                  name={focused ? "user" : "user"}
                  size={24}
                  color={focused ? color : "tintColor"}
                />
              ),
            }}
          />
        </Tab.Navigator>
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
