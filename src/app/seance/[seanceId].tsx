import { router, Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Bouton } from '@/components/Bouton';
import { Introuvable } from '@/components/Introuvable';
import { parcours } from '@/content/parcours';
import { seanceSuivante, situerSeance } from '@/logic/parcours';
import { couleurs } from '@/theme';

// F03 : page séance. Sprint 1 : objectif et contexte ; les autres sections
// (fonctionnel §3.3) arrivent avec T08 et suivants, le bouton « Marquer
// comme terminée » avec T07.
export default function PageSeance() {
  const { seanceId } = useLocalSearchParams<{ seanceId: string }>();
  const position = situerSeance(parcours, seanceId);
  if (!position) return <Introuvable message="Cette séance n'existe pas." />;
  const { module, seance, numeroModule, numeroSeance } = position;
  const suivante = seanceSuivante(parcours, seance.id);

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Stack.Screen options={{ title: `Module ${numeroModule} · Séance ${numeroSeance}` }} />
      <Text style={styles.titre}>{seance.titre}</Text>

      <View style={styles.section}>
        <Text style={styles.titreSection}>Objectif</Text>
        <Text style={styles.texte}>{seance.objectif}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.titreSection}>Contexte et usage</Text>
        <Text style={styles.texte}>{seance.contexte}</Text>
      </View>

      <View style={styles.actions}>
        <Bouton
          libelle="Retour aux séances"
          variante="secondaire"
          onPress={() => router.dismissTo(`/module/${module.id}`)}
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

const styles = StyleSheet.create({
  page: { padding: 16, gap: 16 },
  titre: { fontSize: 22, fontWeight: '700', color: couleurs.texte },
  section: { gap: 4 },
  titreSection: { fontSize: 17, fontWeight: '700', color: couleurs.principale },
  texte: { fontSize: 16, lineHeight: 23, color: couleurs.texte },
  actions: { gap: 12, marginTop: 8 },
});
