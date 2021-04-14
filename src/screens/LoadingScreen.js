import React, { useEffect, useContext } from "react";
import { Button, View, StyleSheet } from "react-native";
import { Context } from "../context/authContext";

const LoadingScreen = () => {
  const { tryLocalSignin } = useContext(Context);
  useEffect(() => {
    tryLocalSignin();
  }, []);
  return null;
};

export default LoadingScreen;
