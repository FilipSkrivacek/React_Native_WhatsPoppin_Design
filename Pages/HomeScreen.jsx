import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import * as Font from 'expo-font';
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [events, setEvents] = useState([
    {
      name: "Pivní slavnosti",
      location: "Pivovar Vratislavice",
      start: "21.4. 19:30",
      end: "22.4 3:00",
      fee: "50,-",
      key: "1",
      note: "Největší pivní slavnosti v Liberci!",
    },
    {
      name: "Maturitní ples P4",
      location: "Kulturní dům Liberec",
      start: "22.6. 19:00",
      end: "23.6. 4:00",
      fee: "300,-",
      key: "2",
      note: "Taneční zábava pro všechny maturanty P4!",
    },
    {
      name: "Liberecký trh",
      location: "Liberecké náměstí",
      start: "13.7. 15:00",
      end: "13.7. 20:00",
      fee: "Zadarmo",
      key: "3",
      note: "Prodejní stánky s místními specialitami a řemeslnými výrobky.",
    },
    {
      name: "Velikonoční trhy",
      location: "Náměstí Ž. Brod",
      start: "8.4 13:00",
      end: "8.4 17:00",
      fee: "Dobrovolné",
      key: "4",
      note: "Tradiční velikonoční trhy s pestrou nabídkou.",
    },
    {
      name: "Maturitní ples E4",
      location: "Kulturní dům Liberec",
      start: "16.9. 18:00",
      end: "17.9 4:00",
      fee: "300,-",
      key: "5",
      note: "Elegantní taneční večer pro maturanty E4!",
    },
  ]);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Bebas Neue': require('../Fonts/BebasNeue-Regular.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.item}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemLocation}>{item.location}</Text>
        <Text style={styles.itemstart}>{item.start}</Text>
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
  itemstart: {
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
