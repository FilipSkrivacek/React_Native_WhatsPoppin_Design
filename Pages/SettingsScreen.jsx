import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const SettingsScreen = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);

  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  const styles = StyleSheet.create({
    root: {
      flexDirection: "column",
      alignItems: "flex-start",
      padding: 50,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
      justifyContent: "flex-end",
    },
    title: {
      fontSize: 23,
      fontWeight: "bold",
      fontFamily: "Bebas Neue",
      marginRight: 70,
    },
    switch: {
      alignSelf: "flex-end",
    },
  });

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Text style={styles.title}>Povolit sdílení polohy:</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch1}
          value={isEnabled1}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Povolit oznámení:</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch2}
          value={isEnabled2}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
