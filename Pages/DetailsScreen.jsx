import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.location}>{item.location}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  location: {
    fontSize: 16,
  },
  time: {
    fontSize: 16,
    color: "gray",
  },
});

export default DetailsScreen;
