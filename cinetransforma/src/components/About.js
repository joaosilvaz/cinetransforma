import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

export default function About() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>🎬 CineTransforma</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Sobre Nós</Text>
                <Text style={styles.text}>
                    Este projeto foi desenvolvido com o objetivo de promover a transformação social através da arte e da informação.
                </Text>

                <View style={styles.devBox}>
                    <Text style={styles.devName}>👤 João Vitor da Silva</Text>
                    <Image
                        source={require('../../assets/jv-perfil.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <Text style={styles.devName}>👤 Guilherme Alves Pedroso</Text>
                    <Image
                        source={require('../../assets/gui-perfil.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <Text style={styles.devName}>👤 Rafael Bezerea</Text>
                    <Image
                        source={require('../../assets/rafa-perfil.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <View style={styles.footerItem}>
                    <Ionicons name="color-palette-outline" size={24} color="red" />
                    <Text style={styles.footerText}>Temas</Text>
                </View>
                <View style={styles.footerItem}>
                    <Ionicons name="home-outline" size={24} color="red" onPress={() => navigation.navigate('Home')} />
                    <Text style={styles.footerText}>Home</Text>
                </View>
                <View style={styles.footerItem}>
                    <Ionicons name="information-circle" size={24} color="red" />
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
        padding: 16,
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
        textAlign: 'center',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    devBox: {
        backgroundColor: '#2a2a2a',
        padding: 16,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    devName: {
        color: '#fff',
        fontSize: 16,
        marginVertical: 6,
        paddingTop: 20
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
