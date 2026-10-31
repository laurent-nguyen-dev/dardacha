import { Pressable, StyleSheet, Text } from 'react-native';

import { NOMS_VARIANTES, type Variante } from '@/content/types';
import { texteALire, texteArabeALire } from '@/logic/audio';
import { lire } from '@/services/audio';
import { couleurs } from '@/theme';

interface Props {
  /** Forme en transcription latine, telle qu'écrite dans le contenu. */
  forme: string;
  variante: Variante;
  /** Version courte (icône seule), pour les cellules du tableau. */
  compact?: boolean;
  /** Écriture arabe de la forme : lue à sa place quand elle existe (§6.3). */
  arabe?: string;
}

// F07 : « 🔊 Écouter », une forme dans une variante.
export function BoutonEcouter({ forme, variante, compact = false, arabe }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Écouter en ${NOMS_VARIANTES[variante]} : ${forme}`}
      onPress={() => lire(arabe ? texteArabeALire(arabe) : texteALire(forme), variante)}
      hitSlop={8}
      style={({ pressed }) => [styles.bouton, pressed && styles.presse]}
    >
      <Text style={styles.libelle}>{compact ? '🔊' : '🔊 Écouter'}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bouton: {
    minHeight: 36,
    minWidth: 36,
    paddingHorizontal: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: couleurs.bordure,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: couleurs.carte,
  },
  presse: { opacity: 0.6 },
  libelle: { fontSize: 14, color: couleurs.texte },
});
