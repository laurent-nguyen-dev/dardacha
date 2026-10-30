import { router, Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Carte } from '@/components/Carte';
import { parcours } from '@/content/parcours';
import { progressionModule } from '@/logic/parcours';
import { useSeancesTerminees } from '@/services/progression';
import { couleurs } from '@/theme';

// F01 : menu principal, une carte par module du registre.
export default function Menu() {
  const terminees = useSeancesTerminees();
  const contenuNonRelu = parcours.some((module) => !module.reluParNatif);

  return (
    <ScrollView contentContainerStyle={styles.liste}>
      <Stack.Screen options={{ title: 'Arabe au quotidien' }} />
      {contenuNonRelu && (
        <View style={styles.avertissement}>
          <Text style={styles.texteAvertissement}>
            Contenu en cours de relecture par des locuteurs natifs.
          </Text>
        </View>
      )}
      {parcours.map((module, index) => {
        const { terminees: faites, total, pourcentage } = progressionModule(module, terminees);
        return (
          <Carte
            key={module.id}
            onPress={() => router.push(`/module/${module.id}`)}
            libelleAccessible={`Module ${index + 1}, ${module.titre}, ${faites} sur ${total} séances terminées`}
          >
            <Text style={styles.icone}>{module.icone}</Text>
            <Text style={styles.surtitre}>Module {index + 1}</Text>
            <Text style={styles.titre}>{module.titre}</Text>
            <Text style={styles.description}>{module.description}</Text>
            <Text style={styles.progression}>
              {faites} / {total} séances · {pourcentage} %
            </Text>
          </Carte>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  liste: { padding: 16, gap: 12 },
  avertissement: {
    backgroundColor: '#fff8e1',
    borderColor: '#f0b429',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  texteAvertissement: { color: couleurs.texte, fontSize: 14 },
  icone: { fontSize: 28 },
  surtitre: { fontSize: 13, color: couleurs.texteDiscret },
  titre: { fontSize: 18, fontWeight: '700', color: couleurs.texte },
  description: { fontSize: 15, color: couleurs.texte },
  progression: { fontSize: 13, color: couleurs.texteDiscret, marginTop: 4 },
});
