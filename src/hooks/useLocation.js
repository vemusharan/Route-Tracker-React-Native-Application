import React, { useContext, useState, useEffect } from "react";

import { Context as LocationContext } from "../context/LocationContext";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

export default (callback, shouldTrack) => {
  const [err, setErr] = useState(null);
  const [subscriber, SetSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      const Sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000, //Get update for either every second or for every 10 meters
          distanceInterval: 10,
        },
        callback
      );
      if (!granted) {
        throw new Error("Location Permissions not granted");
      }
      SetSubscriber(Sub);
    } catch (error) {
      setErr(error);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      SetSubscriber(null);
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [err];
};
