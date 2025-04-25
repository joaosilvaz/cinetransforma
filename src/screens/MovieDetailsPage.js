import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

const API_KEY = "6e5568a7";

export default function MovieDetailsPage({ route }) {
  const { title } = route.params || {};
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!title) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://www.omdbapi.com/", {
          params: {
            t: title,
            apikey: API_KEY,
          },
        });

        if (response.data.Response === "True") {
          setMovie(response.data);
        } else {
          console.warn("Filme não encontrado na API:", response.data.Error);
        }
      } catch (error) {
        console.error("Erro ao buscar detalhes do filme:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [title]);

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#fff" style={{ marginTop: 40 }} />
    );
  }

  if (!movie || !movie.Title || !movie.Poster) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Filme não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: movie.Poster }}
        style={styles.poster}
        resizeMode="contain"
      />
      <Text style={styles.title}>{movie.Title}</Text>
      <Text style={styles.details}>Ano: {movie.Year}</Text>
      <Text style={styles.details}>Gênero: {movie.Genre}</Text>
      <Text style={styles.details}>Diretor: {movie.Director}</Text>
      <Text style={styles.details}>Atores: {movie.Actors}</Text>
      <Text style={styles.details}>Nota IMDB: {movie.imdbRating}</Text>
      <Text style={styles.plot}>{movie.Plot}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    padding: 16,
  },
  poster: {
    width: "100%",
    height: 400,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  details: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 5,
  },
  plot: {
    marginTop: 10,
    fontSize: 16,
    color: "#eee",
  },
  errorText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 40,
  },
});
