import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ThemesPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={require("../../assets/sofa_cinema.png")}
          style={{ width: 550, height: 250 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.titleContainer}>
        <Image
          source={require("../../assets/pipoca.png")}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />
        <Text style={styles.title}>Escolha um Tema</Text>
        <Image
          source={require("../../assets/pipoca.png")}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Diversidade")}
      >
        <Text style={styles.buttonText}>Diversidade</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Sustentabilidade")}
      >
        <Text style={styles.buttonText}>Sustentabilidade</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Saúde Mental")}
      >
        <Text style={styles.buttonText}>Saúde Mental</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "red",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
});
