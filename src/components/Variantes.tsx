import { StyleSheet, Text, View } from 'react-native';

import { type Expression, NOMS_VARIANTES, type Variante, VARIANTES } from '@/content/types';
import { couleurs } from '@/theme';

import { BoutonEcouter } from './BoutonEcouter';
import { TexteArabe } from './TexteArabe';

/** Étiquette colorée d'une variante (convention fixe, fonctionnel §1). */
export function EtiquetteVariante({ variante }: { variante: Variante }) {
  return (
    <View style={[styles.etiquette, { backgroundColor: couleurs[variante] }]}>
      <Text style={styles.texteEtiquette}>{NOMS_VARIANTES[variante]}</Text>
    </View>
  );
}

/** Une forme, ou « — » si la variante n'en a pas. */
export function texteForme(forme: string | null): string {
  return forme ?? '—';
}

/**
 * Sens en français, puis une ligne par variante : transcription latine et,
 * si elle existe, écriture arabe en dessous (fonctionnel §3.7).
 */
export function ExpressionComparee({ expression }: { expression: Expression }) {
  return (
    <View style={styles.carte}>
      <Text style={styles.sens}>{expression.sens}</Text>
      {VARIANTES.map((variante) => {
        const forme = expression.formes[variante];
        const arabe = expression.arabe?.[variante];
        return (
          <View key={variante} style={styles.ligne}>
            <EtiquetteVariante variante={variante} />
            <View style={styles.formes}>
              <Text style={styles.forme}>{texteForme(forme)}</Text>
              {arabe && <TexteArabe texte={arabe} />}
            </View>
            {forme && <BoutonEcouter forme={forme} variante={variante} />}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  carte: {
    backgroundColor: couleurs.carte,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: couleurs.bordure,
    padding: 12,
    gap: 8,
  },
  sens: { fontSize: 16, fontWeight: '600', color: couleurs.texte },
  ligne: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  etiquette: { borderRadius: 4, paddingHorizontal: 6, paddingVertical: 2, minWidth: 56 },
  texteEtiquette: { color: '#ffffff', fontSize: 12, fontWeight: '700', textAlign: 'center' },
  formes: { flex: 1, gap: 2 },
  forme: { fontSize: 16, color: couleurs.texte },
});
