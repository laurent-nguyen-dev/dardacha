import { router, Stack, useLocalSearchParams } from 'expo-router';
import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Bouton } from '@/components/Bouton';
import { Introuvable } from '@/components/Introuvable';
import { Quiz } from '@/components/Quiz';
import { TableauVocabulaire } from '@/components/TableauVocabulaire';
import { ExpressionComparee } from '@/components/Variantes';
import { miniDialogue } from '@/content/dialogue';
import { parcours } from '@/content/parcours';
import { seanceSuivante, situerSeance } from '@/logic/parcours';
import { useActionsProgression, useSeancesTerminees } from '@/services/progression';
import { couleurs } from '@/theme';

// F03 : page séance, sections dans l'ordre du fonctionnel §3.3.
//
// Les sections qui ont un état (quiz, correction type, réponse libre)
// reçoivent `key={seance.id}` : « Séance suivante » réutilise cet écran, et
// la clé force React à repartir d'un état neuf pour la nouvelle séance.
export default function PageSeance() {
  const { seanceId } = useLocalSearchParams<{ seanceId: string }>();
  const terminees = useSeancesTerminees();
  const { marquerTerminee } = useActionsProgression();
  const position = situerSeance(parcours, seanceId);
  if (!position) return <Introuvable message="Cette séance n'existe pas." />;
  const { module, seance, numeroModule, numeroSeance } = position;
  const suivante = seanceSuivante(parcours, seance.id);
  const terminee = terminees.has(seance.id);

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Stack.Screen options={{ title: `Module ${numeroModule} · Séance ${numeroSeance}` }} />
      <Text style={styles.titre}>{seance.titre}</Text>

      <Section titre="Objectif">
        <Text style={styles.texte}>{seance.objectif}</Text>
      </Section>

      <Section titre="Contexte et usage">
        <Text style={styles.texte}>{seance.contexte}</Text>
      </Section>

      <Section titre="Expressions supplémentaires">
        {seance.supplementaires.map((expression) => (
          <ExpressionComparee key={expression.sens} expression={expression} />
        ))}
      </Section>

      <Section titre="Défi oral">
        <Text style={styles.texte}>{seance.defiOral}</Text>
      </Section>

      <Section titre="Vocabulaire comparé">
        <TableauVocabulaire expressions={seance.expressions} />
      </Section>

      <Section titre="À retenir">
        <Text style={styles.texte}>{seance.aRetenir}</Text>
      </Section>

      <Section titre="Mini-dialogue">
        {miniDialogue.map((replique, index) => (
          <View key={index} style={styles.replique}>
            <Text style={styles.locuteur}>{replique.locuteur} :</Text>
            <View style={styles.contenuReplique}>
              <ExpressionComparee expression={replique.expression} />
            </View>
          </View>
        ))}
      </Section>

      <Section titre="Vérifie ta compréhension">
        <Quiz key={seance.id} seanceId={seance.id} />
      </Section>

      <View style={styles.actions}>
        <Bouton
          libelle="Retour aux séances"
          variante="secondaire"
          onPress={() => router.dismissTo(`/module/${module.id}`)}
        />
        <Bouton
          libelle={terminee ? '✓ Séance terminée' : 'Marquer comme terminée'}
          variante="secondaire"
          desactive={terminee}
          onPress={() => marquerTerminee(seance.id)}
        />
        <Bouton
          libelle="Séance suivante"
          desactive={!suivante}
          onPress={() => suivante && router.replace(`/seance/${suivante.id}`)}
        />
      </View>
    </ScrollView>
  );
}

function Section({ titre, children }: { titre: string; children: ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.titreSection} accessibilityRole="header">
        {titre}
      </Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  page: { padding: 16, gap: 20 },
  titre: { fontSize: 22, fontWeight: '700', color: couleurs.texte },
  section: { gap: 8 },
  titreSection: { fontSize: 17, fontWeight: '700', color: couleurs.principale },
  texte: { fontSize: 16, lineHeight: 23, color: couleurs.texte },
  replique: { flexDirection: 'row', gap: 8 },
  locuteur: { fontSize: 16, fontWeight: '700', color: couleurs.texte, paddingTop: 12 },
  contenuReplique: { flex: 1 },
  actions: { gap: 12, marginTop: 8 },
});
