import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { type Expression, VARIANTES } from '@/content/types';
import { couleurs } from '@/theme';

import { EtiquetteVariante, texteForme } from './Variantes';

const LARGEUR_COLONNE = 170;

// Vocabulaire comparé (fonctionnel §3.3, section 5) : français, MSA,
// darija, tounsi. Le tableau défile horizontalement plutôt que de
// déborder de l'écran (critère de recette 12).
export function TableauVocabulaire({ expressions }: { expressions: readonly Expression[] }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator>
      <View style={styles.tableau}>
        <View style={[styles.ligne, styles.entete]}>
          <Text style={[styles.cellule, styles.texteEntete]}>Français</Text>
          {VARIANTES.map((variante) => (
            <View key={variante} style={styles.cellule}>
              <EtiquetteVariante variante={variante} />
            </View>
          ))}
        </View>
        {expressions.map((expression) => (
          <View key={expression.sens} style={styles.ligne}>
            <Text style={[styles.cellule, styles.sens]}>{expression.sens}</Text>
            {VARIANTES.map((variante) => (
              <Text key={variante} style={styles.cellule}>
                {texteForme(expression.formes[variante])}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tableau: {
    borderWidth: 1,
    borderColor: couleurs.bordure,
    borderRadius: 8,
    backgroundColor: couleurs.carte,
  },
  ligne: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: couleurs.bordure,
  },
  entete: { backgroundColor: couleurs.fond },
  cellule: {
    width: LARGEUR_COLONNE,
    padding: 8,
    fontSize: 15,
    color: couleurs.texte,
    alignItems: 'flex-start',
  },
  texteEntete: { fontWeight: '700' },
  sens: { fontWeight: '600' },
});
