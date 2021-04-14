import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { Context } from "../context/authContext";
import { SafeAreaView } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";
import Spacer from "../components/Spacer";
import { Feather } from "@expo/vector-icons";
// function component

const AccountScreen = () => {
  const { signout } = useContext(Context);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={styles.heading}> Account Screen </Text>
      <Spacer />
      <Text style={styles.text}> Thank you for using the Application </Text>

      <Spacer />

      <Button title="Signout" onPress={signout} />
    </SafeAreaView>
  );
};

// Styling Options

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={30} />,
};

// Exporting the functional component

export default AccountScreen;
