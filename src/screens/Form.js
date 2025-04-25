import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Form() {
  const [nome, setNome] = useState("");
  const [opiniao, setOpiniao] = useState("");
  const [temaSelecionado, setTemaSelecionado] = useState("sustentabilidade");
  const [modalVisible, setModalVisible] = useState(false);

  const temas = [
    { label: "Diversidade", value: "diversidade" },
    { label: "Sustentabilidade", value: "sustentabilidade" },
    { label: "Saúde mental", value: "saude" },
  ];

  const handleEnviar = () => {
    if (!nome || !opiniao) {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    Alert.alert("Formulário enviado com sucesso!");
    setNome("");
    setOpiniao("");
    setTemaSelecionado("sustentabilidade");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          source={require("../../assets/comentario.png")}
          style={{ width: 25, height: 25 }}
          resizeMode="contain"
        />
        <Text style={styles.title}>Compartilhe sua opinião</Text>
        <Image
          source={require("../../assets/comentario.png")}
          style={{ width: 25, height: 25 }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.label}>Seu nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Qual tema social mais te impacta?</Text>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.dropdownText}>
          {temas.find((t) => t.value === temaSelecionado)?.label ||
            "Selecione um tema"}
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={temas}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setTemaSelecionado(item.value);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.modalItemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.modalCancel}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Text style={styles.label}>O que você acha sobre esse tema?</Text>
      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Escreva sua opinião..."
        placeholderTextColor="#999"
        value={opiniao}
        onChangeText={setOpiniao}
        multiline
        numberOfLines={5}
      />

      <TouchableOpacity style={styles.button} onPress={handleEnviar}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    flexGrow: 1,
    padding: 24,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  title: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    color: "#fff",
    marginBottom: 6,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  textarea: {
    height: 120,
    textAlignVertical: "top",
  },
  dropdown: {
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  dropdownText: {
    color: "#fff",
  },
  button: {
    backgroundColor: "#e50914",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#222",
    borderRadius: 10,
    padding: 20,
    width: "80%",
  },
  modalItem: {
    paddingVertical: 12,
  },
  modalItemText: {
    color: "#fff",
    fontSize: 16,
  },
  modalCancel: {
    marginTop: 10,
    alignItems: "center",
  },
  modalCancelText: {
    color: "#e50914",
    fontWeight: "bold",
  },
});
