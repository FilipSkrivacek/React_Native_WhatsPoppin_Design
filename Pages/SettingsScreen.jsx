import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const SettingsScreen = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);

  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  const styles = StyleSheet.create({
    root: {
      flex: 1,
      flexDirection: "column",
      alignItems: "stretch",
      paddingTop: 100,
      paddingLeft: 30,
      paddingRight: 30,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
      justifyContent: "space-between",
    },
    title: {
      flex: 1,
      fontSize: 23,
      fontWeight: "bold",
      fontFamily: "Bebas Neue",
    },
    switch: {
      alignSelf: "flex-end",
      borderStyle: "solid",
      borderWidth: 2,
      borderColor: "#013A63"
    },
  });

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Text style={styles.title}>Povolit sdílení polohy:</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#f4f3f4", true: "#013A63" }}
          thumbColor={isEnabled1 ? "#f4f3f4" : "#013A63"}
          ios_backgroundColor="white"
          onValueChange={toggleSwitch1}
          value={isEnabled1}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Povolit oznámení:</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#f4f3f4", true: "#013A63" }}
          thumbColor={isEnabled2 ? "#f4f3f4" : "#013A63"}
          ios_backgroundColor="white"
          onValueChange={toggleSwitch2}
          value={isEnabled2}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
