import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { config } from '@/config';
import type { Expression } from '@/content/types';

import { Bouton } from './Bouton';
import { ExpressionComparee } from './Variantes';

// F09 : correction type du défi oral — les premières expressions de base de
// la séance (décision Q-07), dans les trois variantes, affichées à la demande.
export function CorrectionType({ expressions }: { expressions: readonly Expression[] }) {
  const [visible, setVisible] = useState(false);
  const formules = expressions.slice(0, config.correctionTypeNbFormules);

  return (
    <View style={styles.conteneur}>
      <Bouton
        libelle={visible ? 'Masquer la correction type' : 'Voir la correction type'}
        variante="secondaire"
        onPress={() => setVisible(!visible)}
      />
      {visible &&
        formules.map((expression) => (
          <ExpressionComparee key={expression.sens} expression={expression} />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  conteneur: { gap: 8 },
});
