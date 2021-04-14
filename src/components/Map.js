import React, { useContext } from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { FontAwesome5 } from "@expo/vector-icons";
import { Context as LocationContext } from "../context/LocationContext";
const Map = () => {
  const { state } = useContext(LocationContext);

  if (!state.currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <KeyboardAvoidingView>
      <MapView
        style={styles.map}
        initialRegion={{
          ...state.currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Circle
          center={state.currentLocation.coords}
          radius={30}
          strokeColor="rgba(158,158,255,1.0)"
          fillColor="rgba(158,158,255,0.3)"
        />

        <Polyline coordinates={state.locations.map((loc) => loc.coords)} />
      </MapView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontStyle: "italic",
  },
  map: {
    height: 350,
    borderColor: "black",
  },
});

export default Map;
