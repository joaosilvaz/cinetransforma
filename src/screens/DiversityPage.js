import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import axios from "axios";
import MovieCarousel from "../components/MovieCarousel";
import { useNavigation } from "@react-navigation/native";

const movieTitles = [
  "Moonlight",
  "The Farewell",
  "Crip Camp",
  "Sound of Metal",
  "The Color Purple",
  "Minari",
  "Portrait of a Lady on Fire",
  "The Danish Girl",
  "Brokeback Mountain",
  "12 Years a Slave",
  "Hidden Figures",
  "The Peanut Butter Falcon",
  "Parásita",
  "Dallas Buyers Club",
  "Boy Erased"
];

const API_KEY = "6e5568a7";

export default function DiversityPage() {
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
