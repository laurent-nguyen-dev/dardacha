import { Pressable, StyleSheet, Text } from 'react-native';

import { couleurs } from '@/theme';

interface Props {
  libelle: string;
  onPress: () => void;
  desactive?: boolean;
  variante?: 'principal' | 'secondaire';
}

// Bouton natif accessible : rôle « button », état « désactivé » annoncé
// par les lecteurs d'écran, zone tactile d'au moins 44 pt.
export function Bouton({ libelle, onPress, desactive = false, variante = 'principal' }: Props) {
  const principal = variante === 'principal';
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: desactive }}
      disabled={desactive}
      onPress={onPress}
      style={({ pressed }) => [
        styles.bouton,
        principal ? styles.principal : styles.secondaire,
        desactive && styles.desactive,
        pressed && styles.presse,
      ]}
    >
      <Text
        style={[styles.libelle, principal ? styles.libellePrincipal : styles.libelleSecondaire]}
      >
        {libelle}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bouton: {
    minHeight: 44,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  principal: { backgroundColor: couleurs.principale },
  secondaire: {
    backgroundColor: couleurs.carte,
    borderWidth: 1,
    borderColor: couleurs.principale,
  },
  desactive: { opacity: 0.4 },
  presse: { opacity: 0.7 },
  libelle: { fontSize: 16, fontWeight: '600' },
  libellePrincipal: { color: '#ffffff' },
  libelleSecondaire: { color: couleurs.principale },
});
