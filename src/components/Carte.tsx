import type { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { couleurs } from '@/theme';

interface Props {
  onPress: () => void;
  /** Lu par les lecteurs d'écran à la place du contenu détaillé. */
  libelleAccessible: string;
  terminee?: boolean;
  children: ReactNode;
}

export function Carte({ onPress, libelleAccessible, terminee = false, children }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={libelleAccessible}
      onPress={onPress}
      style={({ pressed }) => [styles.carte, terminee && styles.terminee, pressed && styles.presse]}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  carte: {
    backgroundColor: couleurs.carte,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: couleurs.bordure,
    padding: 16,
    gap: 4,
  },
  terminee: { backgroundColor: couleurs.fondSucces, borderColor: couleurs.succes },
  presse: { opacity: 0.7 },
});
