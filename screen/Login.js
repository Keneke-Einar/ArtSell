import { StyleSheet, Text, View } from "react-native";

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
