import { StyleSheet, Text, View } from 'react-native';

import type { Progression } from '@/logic/parcours';
import { couleurs } from '@/theme';

// F06 : « N / T séances terminées », visible sur tous les écrans.
export function BarreProgression({ progression }: { progression: Progression }) {
  const { terminees, total, pourcentage } = progression;
  return (
    <View style={styles.conteneur}>
      <View
        style={styles.piste}
        accessibilityRole="progressbar"
        accessibilityValue={{ min: 0, max: total, now: terminees }}
      >
        <View style={[styles.remplissage, { width: `${pourcentage}%` }]} />
      </View>
      <Text style={styles.texte}>
        {terminees} / {total} séances terminées
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteneur: { paddingHorizontal: 16, paddingTop: 8, gap: 4 },
  piste: { height: 6, borderRadius: 3, backgroundColor: couleurs.bordure, overflow: 'hidden' },
  remplissage: { height: '100%', backgroundColor: couleurs.succes },
  texte: { fontSize: 13, color: couleurs.texteDiscret, textAlign: 'center' },
});
