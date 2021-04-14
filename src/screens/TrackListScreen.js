import React, { useContext } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";
import { FontAwesome } from "@expo/vector-icons";
// function component

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      {state && (
        <FlatList
          data={state}
          keyExtractor={(item) => item?._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("TrackDetail", { _id: item?._id })
                }
              >
                <ListItem>
                  <ListItem.Content>
                    <ListItem.Title>{item?.name}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </>
  );
};

// Styling Options

TrackListScreen.navigationOptions = {
  title: "Tracks",
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

// Exporting the functional component

export default TrackListScreen;
