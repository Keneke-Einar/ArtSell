import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function ProfileScreen({ }) {

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230,230,240,1)",
    alignItems: "center",
    justifyContent: "center",
  },
});
