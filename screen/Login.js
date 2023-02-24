import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";

function LoginScreen({ navigation, setUserToken }) {

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) =>
          signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
              const userToken = userCredential.user.uid;
              setUserToken(userToken); // set userToken state
              navigation.navigate("Home", { userToken }); // navigate to HomeScreen and pass userToken as parameter
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(error);
            })
        }
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            <Button onPress={handleSubmit} title="Submit" />
            <Button
              title="Register"
              onPress={() => navigation.push("Register")}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const auth = getAuth();

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
