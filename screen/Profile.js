import React, { Component, useState } from "react";
import { StyleSheet, TextInput, Button, Text, View } from "react-native";
import "../src/api"; // Import of the Firebase API configuration file

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login';
import RegisterScreen from './Register.js';

const Stack = createStackNavigator();

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230,230,240,1)",
    alignItems: "center",
    justifyContent: "center",
  },
});
