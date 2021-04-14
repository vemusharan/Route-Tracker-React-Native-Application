import React, { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state,
    addRecording,
    stopRecording,
    changeName,
    startRecording,
  } = useContext(LocationContext);

  const saveTrack = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          value={state.name}
          placeholder="Enter the Name of Recording"
          onChangeText={changeName}
        />
      </Spacer>
      {state.recording ? (
        <Button
          title="Stop Recording!"
          onPress={stopRecording}
          buttonStyle={{ backgroundColor: "#9E1A1A" }}
        />
      ) : (
        <Button
          title="Start Recording!"
          onPress={startRecording}
          buttonStyle={{ backgroundColor: "#1E563A" }}
        />
      )}

      <Spacer>
        {!state.recording && state.locations.length ? (
          <Button title="Save Recording!" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
