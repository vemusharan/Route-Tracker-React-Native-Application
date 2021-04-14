import React, { useContext } from "react";
import { StyleSheet, KeyboardAvoidingView, View } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";
import { Context } from "../context/authContext";

// function component

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(Context);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        heading="Sign-In"
        errorMessage={state.errorMessage}
        onSubmit={signin}
      />

      <NavLink
        message="Doesn't  have an account yet? Sign-up Instead"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

// Styling Options

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
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

export default SigninScreen;
