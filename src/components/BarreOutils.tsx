import { router } from 'expo-router';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

import { useActionsProgression } from '@/services/progression';
import { couleurs } from '@/theme';

// Barre permanente (fonctionnel §4).
export function BarreOutils() {
  const { reinitialiser } = useActionsProgression();

  // F13 : confirmation obligatoire ; « Annuler » ne change rien.
  function demanderReinitialisation() {
    Alert.alert('Réinitialiser', 'Effacer toute ta progression ? Cette action est définitive.', [
      { text: 'Annuler', style: 'cancel' },
      {
        text: 'Réinitialiser',
        style: 'destructive',
        onPress: () => {
          reinitialiser();
          router.dismissTo('/');
        },
      },
    ]);
  }

  return (
    <View style={styles.barre}>
      <Entree icone="🏠" libelle="Menu" onPress={() => router.dismissTo('/')} />
      <Entree icone="📝" libelle="Révisions" onPress={() => router.push('/revisions')} />
      <Entree icone="🔢" libelle="Mémo" onPress={() => router.push('/memo')} />
      <Entree icone="↺" libelle="Réinitialiser" onPress={demanderReinitialisation} />
    </View>
  );
}

function Entree({
  icone,
  libelle,
  onPress,
}: {
  icone: string;
  libelle: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={libelle}
      onPress={onPress}
      style={({ pressed }) => [styles.entree, pressed && styles.presse]}
    >
      <Text style={styles.icone}>{icone}</Text>
      <Text style={styles.libelle}>{libelle}</Text>
    </Pressable>
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
  icone: { fontSize: 20, color: couleurs.texte },
  libelle: { fontSize: 12, color: couleurs.texte },
});
