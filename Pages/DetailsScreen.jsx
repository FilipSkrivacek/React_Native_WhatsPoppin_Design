import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.png";
import Image4 from "../assets/Image4.jpg";
import Image5 from "../assets/Image5.jpg";

const images = [Image1, Image2, Image3, Image4, Image5];

const DetailsScreen = ({ route }) => {
  const { item } = route.params;
  
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.location}>{item.location}</Text>
      <Image source={images[item.key - 1]} style={styles.image} resizeMode="contain" />
      <Text style={styles.start}>{item.start} - {item.end}
      </Text>
      <Text style={styles.fee}>Vstupné: {item.fee}</Text>
      <Text style={styles.note}>{item.note}</Text>
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
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 10,
    fontWeight: "bold",
    fontFamily: "Bebas Neue",
  },
  location: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Bebas Neue",
  },
  image: {
    width: 300,
    height: 250,
  },
  start: {
    fontSize: 25,
    color: "gray",
    marginVertical: 5,
    fontWeight: "bold",
    fontFamily: "Bebas Neue",
  },
  fee: {
    fontSize: 25,
    marginVertical: 5,
    fontWeight: "bold",
    fontFamily: "Bebas Neue",
  },
  note: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
  },
});

export default DetailsScreen;
