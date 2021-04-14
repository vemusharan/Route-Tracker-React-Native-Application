import React, { useContext } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
// function component

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        heading="Sign-Up"
        errorMessage={state.errorMessage}
        onSubmit={({ email, password }) => signup({ email, password })}
      />

      <NavLink
        message="Already have an account? Sign-in Instead"
        routeName="Signin"
      />
    </KeyboardAvoidingView>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

// Styling Options
const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },

  container: {
    justifyContent: "center",
    //marginBottom: 200,
    flex: 1,
  },

  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});

// Exporting the functional component

export default SignupScreen;
