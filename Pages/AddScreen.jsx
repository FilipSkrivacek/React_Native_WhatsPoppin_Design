import React, { useState } from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity,} from "react-native";
import CustomButton from "../components/CustomButton";

const AddScreen = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [poster, setPoster] = useState("");

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
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Začátek akce"
            value={startDate}
            onChangeText={setStartDate}
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Konec akce"
            value={endDate}
            onChangeText={setEndDate}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Adresa místa konání"
          value={address}
          onChangeText={setAddress}
        />
        <TouchableOpacity style={styles.uploadButton} onPress={() => {}}>
          <Text>Nahrát plagát akce</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Cena za vstup"
          value={price}
          onChangeText={setPrice}
        />
        <TextInput
          style={styles.input}
          placeholder="Popis události"
          value={description}
          onChangeText={setDescription}
          multiline={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title="Publikovat" color="#A9D6E5" text="Publikovat" />
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
    fontFamily: "Bebas Neue",
  },
  halfInput: {
    width: "48%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  uploadButton: {
    borderWidth: 1,
    borderColor: "#A9D6E5",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    
  },
  uploadButtonText: {
    color: "#A9D6E5",
    fontFamily: "Bebas Neue",
  },
  buttonContainer: {
    alignSelf: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  publishButton: {
    backgroundColor: "#A9D6E5",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  publishButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    textTransform: "uppercase",
  },
});


export default AddScreen;
