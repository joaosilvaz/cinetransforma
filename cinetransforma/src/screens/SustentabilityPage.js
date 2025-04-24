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

export default function SustentabilityPage() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textSection}>
        <Text style={styles.title}>Filmes que Abordam Sustentabilidade</Text>
        <Text style={styles.text}>
          O cinema é uma poderosa ferramenta para conscientização sobre questões
          ambientais. Por meio de histórias impactantes, filmes têm alertado
          sobre as consequências das mudanças climáticas, o desmatamento, a
          poluição e o consumo desenfreado.
        </Text>
        <Text style={styles.text}>
          Essas produções incentivam a reflexão e inspiram ações sustentáveis,
          mostrando a importância de preservar os recursos naturais e cuidar do
          nosso planeta para as futuras gerações.
        </Text>
        <Text style={styles.text}>
          A seguir, destacamos alguns filmes que abordam com profundidade o tema
          da sustentabilidade e seus impactos no mundo atual:
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
