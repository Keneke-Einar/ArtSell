import React from "react";
import { StyleSheet, View } from "react-native";


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      
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
