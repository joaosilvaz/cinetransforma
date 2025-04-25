import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import axios from "axios";
import MovieCarousel from "../components/MovieCarousel";
import { useNavigation } from "@react-navigation/native";

const movieTitles = [
  "A Beautiful Mind",
  "Silver Linings Playbook",
  "Girl, Interrupted",
  "The Perks of Being a Wallflower",
  "Inside Out"
];

const API_KEY = "6e5568a7";

export default function MentalHealthPage() {
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
        <Text style={styles.title}>Filmes sobre Saúde Mental</Text>
        <Text style={styles.text}>
          O cinema tem se mostrado uma ferramenta poderosa para explorar e desmistificar questões relacionadas à saúde mental.
           Através de narrativas sensíveis e profundas, filmes têm ajudado a romper tabus, gerar empatia e estimular conversas sobre
            transtornos psicológicos, autocuidado e bem-estar emocional.
        </Text>
        <Text style={styles.text}>
          A seguir, destacamos alguns filmes que se destacam por suas abordagens honestas e impactantes sobre saúde mental
           e os desafios enfrentados por quem vive com esses transtornos:
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
