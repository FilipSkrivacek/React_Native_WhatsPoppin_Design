import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [events, setEvents] = useState([
    {
      name: "Pivní slavnosti",
      location: "Pivovar Vratislavice",
      time: "21.4. 19:30",
      key: "1",
    },
    {
      name: "Maturitní ples P4",
      location: "Kulturní dům Liberec",
      time: "22.6. 19:00",
      key: "2",
    },
    {
      name: "Liberecký trh",
      location: "Liberecké náměstí",
      time: "13.7. 15:00",
      key: "3",
    },
    {
      name: "Velikonoční trhy",
      location: "Náměstí Ž. Brod",
      time: "Velikonoce",
      key: "4",
    },
    {
      name: "Maturitní ples E4",
      location: "Kulturní dům Liberec",
      time: "16.9. 18:00",
      key: "5",
    },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.item}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemLocation}>{item.location}</Text>
        <Text style={styles.itemTime}>{item.time}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Podrobnosti"
          color="#A9D6E5"
          text="Podrobnosti"
          onPress={() => navigation.navigate("Details", { item: item })}
        />
      </View>
    </View>
  );

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Brzy v Liberci a okolí</Text>
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 50,
  },
  itemContainer: {
    borderWidth: 2,
    borderColor: "#A9D6E5",
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderRadius: 0,
    marginVertical: 10,
    alignSelf: "stretch",
  },
  item: {
    backgroundColor: "",
    paddingRight: 70,
    paddingLeft: 70,
    paddingTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  itemName: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Bebas Neue",
  },
  itemLocation: {
    fontSize: 16,
    fontFamily: "Bebas Neue",
  },
  itemTime: {
    fontSize: 16,
    color: "gray",
    fontFamily: "Bebas Neue",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Bebas Neue",
    marginBottom: 20,
    alignSelf: "center",
  },
  buttonContainer: {
    alignSelf: "center",
  },
});

export default HomeScreen;
