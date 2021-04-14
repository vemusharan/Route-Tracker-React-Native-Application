//import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { KeyboardAvoidingView, StyleSheet, Text } from "react-native";
import Map from "../components/Map";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import TrackForm from "../components/TrackForm";
import useLocation from "../hooks/useLocation";
import { FontAwesome } from "@expo/vector-icons";
import { Context as LocationContext } from "../context/LocationContext";
import { LogBox } from "react-native";

// function component

const TrackCreateScreen = ({ isFocused }) => {
  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  // <SafeAreaView forceInset={{ top: "always" }}>

  const { state, addLocation } = useContext(LocationContext);

  const callback = useCallback(
    (location) => addLocation(location, state.recording),
    [state.recording]
  );
  const [err] = useLocation(callback, isFocused || state.recording);
  return (
    <KeyboardAvoidingView>
      <Map />

      {err ? <Text> Please turn your location on</Text> : null}
      <TrackForm />
    </KeyboardAvoidingView>
    // </SafeAreaView>
  );
};

// Styling Options

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  navigationOptions: {
    fontSize: 24,
  },
});

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={30} />,
};

// Exporting the functional component

export default withNavigationFocus(TrackCreateScreen);
