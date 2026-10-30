import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { couleurs } from '@/theme';

// Barre permanente (fonctionnel §4). Les entrées Révisions, Mémo et
// Réinitialiser s'ajoutent avec leurs tickets (T16, T17, T07).
export function BarreOutils() {
  return (
    <View style={styles.barre}>
      <Pressable
        accessibilityRole="button"
        onPress={() => router.dismissTo('/')}
        style={({ pressed }) => [styles.entree, pressed && styles.presse]}
      >
        <Text style={styles.icone}>🏠</Text>
        <Text style={styles.libelle}>Menu</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  barre: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: couleurs.bordure,
    backgroundColor: couleurs.carte,
    paddingTop: 4,
  },
  entree: { minHeight: 44, minWidth: 64, alignItems: 'center', justifyContent: 'center' },
  presse: { opacity: 0.6 },
  icone: { fontSize: 20 },
  libelle: { fontSize: 12, color: couleurs.texte },
});
