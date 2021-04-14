import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { Context as TrackContext } from "../context/TrackContext";
// function component

const TrackDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam("_id");
  const { state } = useContext(TrackContext);

  const track = state.find((t) => t?._id === _id);
  const initialCords = track.locations[0].coords;
  return (
    <View>
      <Text style={styles.heading}> {track.name} </Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCords,
        }}
        style={styles.Map}
      >
        <Polyline
          strokeWidth={6}
          strokeColor="#ff69b4"
          coordinates={track.locations.map((loc) => loc.coords)}
        />
      </MapView>
    </View>
  );
};

// Styling Options

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },

  Map: {
    height: 300,
  },
});

// Exporting the functional component

export default TrackDetailScreen;
