import { createContext, type ReactNode, useContext } from 'react';
import { Linking, Pressable, StyleSheet, Text } from 'react-native';

import type { Expression } from '@/content/types';
import { lienSignalement } from '@/logic/signalement';
import { couleurs } from '@/theme';

// F16 : signaler une erreur de contenu (fonctionnel §3.9).
//
// Le lieu (module, séance) est fourni une fois par la page, par
// `LieuSignalement`, plutôt que transmis à chaque expression : les
// expressions s'affichent dans des composants qui ignorent la séance
// (quiz, corrections).

const ContexteLieu = createContext('');

export function LieuSignalement({ lieu, children }: { lieu: string; children: ReactNode }) {
  return <ContexteLieu.Provider value={lieu}>{children}</ContexteLieu.Provider>;
}

interface Props {
  /** L'expression concernée ; sans elle, le signalement porte sur la page. */
  expression?: Expression;
  /** Libellé affiché ; « ⚑ Signaler » par défaut. */
  libelle?: string;
}

export function BoutonSignaler({ expression, libelle = '⚑ Signaler' }: Props) {
  const lieu = useContext(ContexteLieu);
  const cible = expression ? `« ${expression.sens} »` : 'cette page';
  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel={`Signaler une erreur sur ${cible}`}
      hitSlop={8}
      onPress={() => Linking.openURL(lienSignalement({ lieu, expression }))}
      style={({ pressed }) => [styles.lien, pressed && styles.presse]}
    >
      <Text style={styles.texte}>{libelle}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  lien: { alignSelf: 'flex-end', paddingVertical: 4 },
  presse: { opacity: 0.6 },
  texte: { fontSize: 13, color: couleurs.texteDiscret, textDecorationLine: 'underline' },
});
