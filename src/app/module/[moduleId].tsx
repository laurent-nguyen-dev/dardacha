import { router, Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';

import { Carte } from '@/components/Carte';
import { Introuvable } from '@/components/Introuvable';
import { parcours } from '@/content/parcours';
import { situerModule } from '@/logic/parcours';
import { useSeancesTerminees } from '@/services/progression';
import { couleurs } from '@/theme';

// F02 : les séances d'un module ; une séance terminée a une coche et un
// fond vert.
export default function PageModule() {
  const { moduleId } = useLocalSearchParams<{ moduleId: string }>();
  const terminees = useSeancesTerminees();
  const position = situerModule(parcours, moduleId);
  if (!position) return <Introuvable message="Ce module n'existe pas." />;
  const { module, numero } = position;

  return (
    <ScrollView contentContainerStyle={styles.liste}>
      <Stack.Screen options={{ title: `Module ${numero}` }} />
      <Text style={styles.titre}>
        {module.icone} {module.titre}
      </Text>
      {module.seances.map((seance, index) => {
        const terminee = terminees.has(seance.id);
        return (
          <Carte
            key={seance.id}
            terminee={terminee}
            onPress={() => router.push(`/seance/${seance.id}`)}
            libelleAccessible={`Séance ${index + 1}, ${seance.titre}${terminee ? ', terminée' : ''}`}
          >
            <Text style={styles.surtitre}>
              {terminee ? '✓ ' : ''}Séance {index + 1}
            </Text>
            <Text style={styles.titreSeance}>{seance.titre}</Text>
            <Text style={styles.objectif}>{seance.objectif}</Text>
          </Carte>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  liste: { padding: 16, gap: 12 },
  titre: { fontSize: 20, fontWeight: '700', color: couleurs.texte },
  surtitre: { fontSize: 13, color: couleurs.texteDiscret },
  titreSeance: { fontSize: 17, fontWeight: '600', color: couleurs.texte },
  objectif: { fontSize: 15, color: couleurs.texte },
});
