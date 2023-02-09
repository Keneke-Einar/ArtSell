import { StyleSheet, TextInput, Button, View } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";

function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) =>
          createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log("Signed in")
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(error)
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
          </View>
        )}
      </Formik>
    </View>
  );
}

const auth = getAuth();

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
