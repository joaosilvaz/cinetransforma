import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

export default function MovieCarousel({ movies }) {
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        loop
        width={width}
        height={300}
        autoPlay
        data={movies}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.carouselTitle}>{item.title}</Text>
          </View>
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
    width: width * 0.8,
    height: 200,
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
