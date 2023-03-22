import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

const AddScreen = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  const handleSaveEvent = () => {
    const newEvent = {
      name: name,
      location: location,
      time: time,
      key: Math.random().toString(),
    };
    route.params.addEvent(newEvent);
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Vytvořit novou akci</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Název akce"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Místo konání"
          value={location}
          onChangeText={setLocation}
        />
        <TextInput
          style={styles.input}
          placeholder="Datum a čas"
          value={time}
          onChangeText={setTime}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Uložit"
          color="#A9D6E5"
          text="Uložit"
          onPress={handleSaveEvent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Bebas Neue",
    marginBottom: 20,
    alignSelf: "center",
  },
  inputContainer: {
    alignSelf: "stretch",
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#A9D6E5",
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    alignSelf: "center",
  },
});

export default AddScreen;
