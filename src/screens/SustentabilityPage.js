import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import axios from "axios";
import MovieCarousel from "../components/MovieCarousel";
import { useNavigation } from "@react-navigation/native";

const movieTitles = [
  "Wall-E",
  "The Day After Tomorrow",
  "An Inconvenient Truth",
  "The 11th Hour"
];

const API_KEY = "6e5568a7";

export default function SustentabilityPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieRequests = movieTitles.map((title) =>
          axios.get(`http://www.omdbapi.com/`, {
            params: {
              t: title,
              apikey: API_KEY,
            },
          })
        );

        const responses = await Promise.all(movieRequests);
        const fetchedMovies = responses
          .map((res) => res.data)
          .filter((data) => data.Response === "True")
          .map((data) => ({
            title: data.Title,
            image: data.Poster,
          }));

        setMovies(fetchedMovies);
      } catch (err) {
        console.error("Erro ao buscar filmes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleMoviePress = (title) => {
    navigation.navigate("Descrição Filme", { title });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.textSection}>
        <Text style={styles.title}>Filmes sobre Sustentabilidade</Text>
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

      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <MovieCarousel movies={movies} onMoviePress={handleMoviePress} />
      )}
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
