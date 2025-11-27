import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda do dia</Text>

      <Text style={styles.name}>Diego Murari</Text>
      <Text style={styles.class}>Engenharia de Software</Text>

      <View style={styles.buttonsContainer}>
        <Button
          title="Meus compromissos"
          onPress={() => navigation.navigate('MeusCompromissos')}
        />

        <View style={{ height: 16 }} />

        <Button
          title="Compromissos de equipe"
          onPress={() => navigation.navigate('CompromissosEquipe')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
  },
  class: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 28,
  },
  buttonsContainer: {
    width: 220,
  },
});
