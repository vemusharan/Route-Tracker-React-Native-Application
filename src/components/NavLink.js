import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ message, navigation, routeName }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
          <Text style={styles.link}> {message} </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
  },
  link: {
    color: "blue",
    fontSize: 18,
  },
});

export default withNavigation(NavLink);
