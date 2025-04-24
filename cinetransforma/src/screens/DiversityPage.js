import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MovieCarousel from "../components/MovieCarousel";

const movies = [
  {
    title: "Pantera Negra",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/2/28/Black_Panther_2018.jpg",
  },
  {
    title: "Everything Everywhere All at Once",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/2/28/Black_Panther_2018.jpg",
  },
  {
    title: "The Prom",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/1/17/ThePromNetflixPoster.jpg",
  },
  {
    title: "Viva - A vida é uma festa",
    image: "https://br.web.img3.acsta.net/pictures/17/12/07/11/33/0502209.jpg",
  },
  {
    title: "A Fantastic Woman",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f3/Moonlight_%28filme%29.png/250px-Moonlight_%28filme%29.png",
  },
];

export default function DiversityPage() {
  return (
    <ScrollView style={styles.container}>
      {/* Seção explicativa sobre filmes de diversidade */}
      <View style={styles.textSection}>
        <Text style={styles.title}>Filmes que Abordam Diversidade</Text>
        <Text style={styles.text}>
          O cinema tem sido uma das formas mais poderosas de abordar questões de
          diversidade, igualdade e representatividade. Filmes que tratam de
          temas como racismo, identidade de gênero, cultura e questões sociais
          têm ajudado a promover debates importantes e aumentar a visibilidade
          de grupos historicamente marginalizados.
        </Text>
        <Text style={styles.text}>
          Aqui estão alguns filmes contemporâneos que se destacam por suas
          abordagens sobre diversidade e inclusão:
        </Text>
      </View>

      <MovieCarousel movies={movies} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    paddingTop: 20,
  },
  textSection: {
    padding: 16,
    backgroundColor: "#2a2a2a",
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    color: "#ccc",
    textAlign: "center",
    marginBottom: 15,
    fontSize: 16,
  },
});
