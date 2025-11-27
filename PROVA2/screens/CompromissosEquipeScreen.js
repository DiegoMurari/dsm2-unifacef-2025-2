import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

const dadosEquipe = [
  {
    titulo: 'Eu',
    data: [
      { id: '1', hora: '09h30', texto: "Reunião 'Daily'" },
      { id: '2', hora: '14h00', texto: 'Reunião com Cliente Carros & Carros' },
      { id: '3', hora: '16h30', texto: 'Prazo final Projeto X' },
    ],
  },
  {
    titulo: 'Jurema (chefe)',
    data: [
      { id: '4', hora: '09h30', texto: "Reunião 'Daily'" },
      { id: '5', hora: '12h00', texto: 'Almoço com a diretoria' },
      { id: '6', hora: '15h00', texto: 'Saida viagem' },
    ],
  },
  {
    titulo: 'Aderbal',
    data: [
      { id: '7', hora: '09h30', texto: "Reunião 'Daily'" },
      { id: '8', hora: '13h30', texto: 'Visita técnica Uni-FACEF' },
      { id: '9', hora: '16h30', texto: 'Prazo final Projeto X' },
    ],
  },
];

export default function CompromissosEquipeScreen() {
  const renderItem = ({ item }) => (
    <Text style={styles.item}>
      {item.hora}: {item.texto}
    </Text>
  );

  const renderSectionHeader = ({ section: { titulo } }) => (
    <Text style={styles.sectionHeader}>{titulo}</Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Compromissos de equipe</Text>
        <Text style={styles.name}>Diego Murari</Text>
        <Text style={styles.class}>Engenharia de Software</Text>
      </View>

      <SectionList
        sections={dadosEquipe}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 12,
  },
  screenTitle: {
    fontSize: 20,
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
    paddingBottom: 16,
  },
  sectionHeader: {
    marginTop: 12,
    marginBottom: 4,
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    fontSize: 16,
    marginLeft: 8,
    marginBottom: 4,
  },
});
