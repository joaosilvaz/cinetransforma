import { Ionicons } from "@expo/vector-icons";
import { Image, Linking, StyleSheet, Text, View } from "react-native";
export default function Card({ nome, imagem, insta, linkedin, github }) {
  return (
    <View style={styles.devBox}>
      <Image source={imagem} style={styles.image} resizeMode="contain" />
      <Text style={styles.devName}> {nome}</Text>
      <Text style={styles.class}> 1TDSPZ</Text>
      <View style={styles.social}>
        <Ionicons
          name="logo-github"
          size={30}
          color="red"
          onPress={() => Linking.openURL(github)}
        />
        <Ionicons
          name="logo-linkedin"
          size={30}
          color="red"
          onPress={() => Linking.openURL(linkedin)}
        />
        <Ionicons
          name="logo-instagram"
          size={30}
          color="red"
          onPress={() => Linking.openURL(insta)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  devBox: {
    backgroundColor: "#2a2a2a",
    padding: 16,
    borderRadius: 10,
    width: "95%",
    alignItems: "center",
    marginBottom: 10,
  },
  devName: {
    color: "#fff",
    fontSize: 16,
    paddingTop: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  social: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  class: {
    color: "white",
    padding: 5,
    marginVertical: 6,
  },
});
