import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const compromissos = [
  { id: '1', hora: '09h30', texto: "Reunião 'Daily'" },
  { id: '2', hora: '14h00', texto: 'Reunião com Cliente Carros & Carros' },
  { id: '3', hora: '16h30', texto: 'Prazo final Projeto X' },
];

export default function MeusCompromissosScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.me}>(Eu)</Text>
        <Text style={styles.name}>Diego Murari</Text>
        <Text style={styles.class}>Engenharia de Software</Text>
      </View>

      <FlatList
        data={compromissos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.hora}: {item.texto}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  me: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
  },
  class: {
    fontSize: 16,
    color: '#555',
  },
  listContent: {
    paddingTop: 8,
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
});
