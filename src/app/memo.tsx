import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { BoutonEcouter } from '@/components/BoutonEcouter';
import { Quiz } from '@/components/Quiz';
import { memo } from '@/content/memo';
import type { ChiffreMemo } from '@/content/types';
import { genererQuizMemo } from '@/logic/quizMemo';
import { couleurs } from '@/theme';

const INTRO =
  "Sur WhatsApp, on écrit l'arabe en lettres latines et on remplace par des chiffres les sons qui n'existent pas en français. Chaque chiffre ressemble à la lettre arabe qu'il remplace.";

// F12 : mémo des chiffres SMS — une fiche par chiffre, puis un quiz.
export default function Memo() {
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Stack.Screen options={{ title: 'Mémo des chiffres SMS' }} />
      <Text style={styles.intro}>{INTRO}</Text>

      {memo.map((chiffre) => (
        <FicheChiffre key={chiffre.chiffre} chiffre={chiffre} />
      ))}

      <Text style={styles.titreSection} accessibilityRole="header">
        Quiz
      </Text>
      <Quiz
        generer={() => genererQuizMemo(memo)}
        grandsChoix
        correction={({ chiffre }) => (
          <Text style={styles.texte}>
            {chiffre.chiffre} = {chiffre.lettre} : {chiffre.son}.
          </Text>
        )}
      />
    </ScrollView>
  );
}

function FicheChiffre({ chiffre }: { chiffre: ChiffreMemo }) {
  return (
    <View style={styles.fiche}>
      <View style={styles.entete}>
        <Text style={styles.chiffre}>{chiffre.chiffre}</Text>
        <Text style={styles.egal}>=</Text>
        <Text style={styles.lettre}>{chiffre.lettre}</Text>
        <Text style={styles.son}>{chiffre.son}</Text>
      </View>
      <Text style={styles.texte}>{chiffre.prononciation}</Text>
      {chiffre.exemples.map((exemple) => (
        <View key={exemple.transcription} style={styles.exemple}>
          <Text style={styles.transcription}>{exemple.transcription}</Text>
          <Text style={styles.arabe}>{exemple.arabe}</Text>
          <Text style={styles.sens}>{exemple.sens}</Text>
          <BoutonEcouter forme={exemple.arabe} arabe={exemple.arabe} variante="msa" compact />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  page: { padding: 16, gap: 16 },
  intro: { fontSize: 16, lineHeight: 23, color: couleurs.texte },
  fiche: {
    backgroundColor: couleurs.carte,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: couleurs.bordure,
    padding: 12,
    gap: 8,
  },
  entete: { flexDirection: 'row', alignItems: 'center', gap: 10, flexWrap: 'wrap' },
  chiffre: { fontSize: 30, fontWeight: '700', color: couleurs.principale },
  egal: { fontSize: 22, color: couleurs.texteDiscret },
  lettre: { fontSize: 34, color: couleurs.texte },
  son: { fontSize: 16, fontWeight: '600', color: couleurs.texte },
  texte: { fontSize: 15, lineHeight: 21, color: couleurs.texte },
  exemple: { flexDirection: 'row', alignItems: 'center', gap: 10, flexWrap: 'wrap' },
  transcription: { fontSize: 16, fontWeight: '600', color: couleurs.texte },
  arabe: { fontSize: 22, color: couleurs.texte },
  sens: { flex: 1, fontSize: 15, color: couleurs.texteDiscret },
  titreSection: { fontSize: 17, fontWeight: '700', color: couleurs.principale },
});
