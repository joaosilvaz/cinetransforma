import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🎬 CineTransforma</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Explicação do site</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id diam quis nunc varius ultrices eu a risus. Mauris ultrices quam sed rutrum molestie. Curabitur vitae justo turpis. Sed dignissim elit in orci varius, vitae vulputate odio luctus. Proin sit amet purus vestibulum, convallis nisi vitae, suscipit lacus.
        </Text>
        <Image
          source={require('./assets/banner.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Ionicons name="color-palette-outline" size={24} color="red" />
          <Text style={styles.footerText}>Temas</Text>
        </View>
        <View style={styles.footerItem}>
          <Ionicons name="home-outline" size={24} color="red" />
          <Text style={styles.footerText}>Home</Text>
        </View>
        <View style={styles.footerItem}>
          <Ionicons name="information-circle-outline" size={24} color="red" />
          <Text style={styles.footerText}>Sobre Nós</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    backgroundColor: '#000',
    paddingVertical: 15,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'red',
    fontSize: 22,
    fontWeight: 'bold',
  },
  content: {
    padding: 28,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  text: {
    color: '#ccc',
    textAlign: 'justify',
    marginBottom: 20,
  },
  image: {
    width: 600,
    height: 400,
    borderRadius: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#333',
    backgroundColor: '#000',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    color: 'red',
    fontSize: 12,
  },
});
