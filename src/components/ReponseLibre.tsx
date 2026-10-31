import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { config } from '@/config';
import { NOMS_VARIANTES, type Seance } from '@/content/types';
import { type Correction, corriger } from '@/logic/correcteur';
import { couleurs } from '@/theme';

import { Bouton } from './Bouton';
import { ExpressionComparee } from './Variantes';

const RAPPEL =
  "Le correcteur repère les expressions de la séance ; il ne vérifie ni la grammaire ni l'accord au masculin ou au féminin.";

// F10 : « À toi de jouer » — réponse libre et correcteur.
export function ReponseLibre({ seance }: { seance: Seance }) {
  const [texte, setTexte] = useState('');
  const [correction, setCorrection] = useState<Correction | null>(null);

  return (
    <View style={styles.conteneur}>
      <Text style={styles.consigne}>{seance.aToiDeJouer}</Text>
      <TextInput
        accessibilityLabel="Ta réponse"
        placeholder="Écris ta réponse ici…"
        placeholderTextColor={couleurs.texteDiscret}
        value={texte}
        onChangeText={setTexte}
        multiline
        maxLength={config.reponseLongueurMax}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.saisie}
      />
      <Bouton
        libelle="Corriger ma réponse"
        onPress={() => setCorrection(corriger(seance, texte))}
      />
      {correction && <ResultatCorrection correction={correction} />}
    </View>
  );
}

function ResultatCorrection({ correction }: { correction: Correction }) {
  if (correction.statut === 'vide') {
    return (
      <Text style={styles.texte}>
        {"Écris d'abord ta réponse, puis touche « Corriger ma réponse »."}
      </Text>
    );
  }
  const { reconnues, suggestions } = correction;
  return (
    <View style={styles.resultat}>
      {reconnues.length === 0 ? (
        <Text style={styles.texte}>{"Aucune expression de la séance n'a été reconnue."}</Text>
      ) : (
        <>
          <Text style={styles.sousTitre}>Expressions reconnues :</Text>
          {reconnues.map(({ expression, variante }) => (
            <Text key={expression.sens} style={styles.reconnue}>
              ✓ {expression.sens} ({NOMS_VARIANTES[variante]})
            </Text>
          ))}
        </>
      )}
      {suggestions.length > 0 && (
        <>
          <Text style={styles.sousTitre}>Tu pourrais aussi utiliser :</Text>
          {suggestions.map((expression) => (
            <ExpressionComparee key={expression.sens} expression={expression} />
          ))}
        </>
      )}
      <Text style={styles.rappel}>{RAPPEL}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteneur: { gap: 8 },
  consigne: { fontSize: 16, lineHeight: 23, color: couleurs.texte },
  saisie: {
    minHeight: 96,
    borderWidth: 1,
    borderColor: couleurs.bordure,
    borderRadius: 8,
    backgroundColor: couleurs.carte,
    padding: 12,
    fontSize: 16,
    color: couleurs.texte,
    textAlignVertical: 'top',
  },
  resultat: { gap: 8 },
  texte: { fontSize: 15, color: couleurs.texte },
  sousTitre: { fontSize: 15, fontWeight: '700', color: couleurs.texte },
  reconnue: { fontSize: 15, color: couleurs.succes },
  rappel: { fontSize: 13, fontStyle: 'italic', color: couleurs.texteDiscret },
});
