import { router, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Bouton } from './Bouton';

// Affiché si une adresse désigne un module ou une séance qui n'existe pas
// (ou plus) dans le parcours.
export function Introuvable({ message }: { message: string }) {
  return (
    <View style={styles.conteneur}>
      <Stack.Screen options={{ title: 'Introuvable' }} />
      <Text style={styles.texte}>{message}</Text>
      <Bouton libelle="Retour au menu" onPress={() => router.dismissTo('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  conteneur: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16, padding: 16 },
  texte: { fontSize: 16 },
});
