import { StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import "./src/api"; // Firebase API configuration
import { getAuth, signOut } from "firebase/auth";

import HomeScreen from "./screen/Home";
import ChatScreen from "./screen/Chat";
import BasketScreen from "./screen/Basket";
import ProfileScreen from "./screen/Profile";
import RegisterScreen from "./screen/Register";
import LoginScreen from "./screen/Login";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [userToken, setUserToken] = useState(null);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUserToken(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <NavigationContainer>
      {userToken ? (
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
            name="Profile"
            component={ProfileScreen}
            initialParams={{ userToken: userToken }}
            options={({ navigation }) => ({
              // Tab Icon
              tabBarIcon: ({ focused, color }) => (
                <FontAwesome5
                  name={focused ? "user" : "user"}
                  size={24}
                  color={focused ? color : "tintColor"}
                />
              ),
              // Logout Button
              headerRight: () => (
                <Button title="Logout" onPress={handleLogout} />
              ),
            })}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login">
            {({ navigation }) => (
              <LoginScreen
                setUserToken={setUserToken}
                navigation={navigation}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      )}
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
