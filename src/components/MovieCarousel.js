import React from "react";
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

export default function MovieCarousel({ movies, onMoviePress }) {
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        loop
        width={width}
        height={500}
        autoPlay
        data={movies}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onMoviePress(item.title)}>
            <View style={styles.carouselItem}>
              <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
              <Text style={styles.carouselTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  carouselItem: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 10,
    margin: 10,
  },
  image: {
    width: width * 1,
    height: 300,
    borderRadius: 10,
  },
  carouselTitle: {
    color: "#fff",
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
});
