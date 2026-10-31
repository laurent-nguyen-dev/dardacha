import { StyleSheet, Text } from 'react-native';

import { couleurs } from '@/theme';

// Écriture arabe d'une forme (fonctionnel §3.7) : de droite à gauche, un peu
// plus grande que la transcription latine pour rester lisible. La langue est
// signalée aux lecteurs d'écran (VoiceOver la prononce en arabe).
export function TexteArabe({ texte }: { texte: string }) {
  return (
    <Text style={styles.arabe} accessibilityLanguage="ar">
      {texte}
    </Text>
  );
}

const styles = StyleSheet.create({
  arabe: {
    fontSize: 19,
    lineHeight: 28,
    color: couleurs.texte,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
});
