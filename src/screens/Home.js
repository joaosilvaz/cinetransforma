import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const images = [
  require("../../assets/banner.png"),
  require("../../assets/second-banner.jpg"),
  require("../../assets/third-banner.jpg"),
];
export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Sobre nosso produto:</Text>
        <Text style={styles.text}>
          Nosso projeto foi criado a partir de uma forte inspiração no filme
          "Ainda Estou Aqui". Ao assistirmos à obra, percebemos como uma
          narrativa sensível e bem construída pode ir além do entretenimento,
          provocando reflexões profundas e transformando percepções sobre temas
          sociais relevantes. O impacto emocional gerado pelo filme nos fez
          enxergar o poder que o audiovisual tem de despertar empatia, promover
          diálogos e influenciar comportamentos.
        </Text>
        <Text style={styles.text}>
          Foi então que compreendemos: filmes têm um papel essencial na educação
          social da população. Decidimos então criar esse projeto,que sugere
          obras audiovisuais que abordam temas sociais relevantes, com o intuito
          de promover a reflexão e o debate. Acreditamos que, ao assistir a
          esses filmes, as pessoas podem ampliar sua visão de mundo, desenvolver
          empatia e se engajar em causas sociais.
        </Text>
        <View style={styles.carouselContainer}>
          <Carousel
            width={width * 0.9}
            height={250}
            data={images}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => (
              <View style={styles.carouselItem}>
                <Image
                  source={item}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
            )}
            loop
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  content: {
    padding: 28,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
    fontWeight: "bold",
  },
  text: {
    color: "#ccc",
    textAlign: "justify",
    marginBottom: 20,
  },
  image: {
    width: width * 1,
    height: 300,
    borderRadius: 10,
  },
  carouselItem: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 10,
    margin: 10,
  },
});
