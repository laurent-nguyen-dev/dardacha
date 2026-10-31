import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { parcours } from '@/content/parcours';
import { genererQuiz, type Question } from '@/logic/quiz';
import { couleurs } from '@/theme';

import { Bouton } from './Bouton';
import { ExpressionComparee } from './Variantes';

// F08 : quiz de séance. Une question répondue est verrouillée ; le score
// s'affiche quand toutes les questions sont répondues.
export function Quiz({ seanceId }: { seanceId: string }) {
  const [questions, setQuestions] = useState(() => genererQuiz(parcours, seanceId));
  const [reponses, setReponses] = useState<(string | undefined)[]>([]);

  const nbRepondues = reponses.filter((r) => r !== undefined).length;
  const score = questions.filter((q, i) => reponses[i] === q.bonneReponse).length;

  function repondre(index: number, choix: string) {
    if (reponses[index] !== undefined) return;
    const nouvelles = [...reponses];
    nouvelles[index] = choix;
    setReponses(nouvelles);
  }

  function refaire() {
    setQuestions(genererQuiz(parcours, seanceId));
    setReponses([]);
  }

  return (
    <View style={styles.quiz}>
      {questions.map((question, index) => (
        <QuestionQuiz
          key={`${question.enonce}-${index}`}
          numero={index + 1}
          question={question}
          reponse={reponses[index]}
          onChoix={(choix) => repondre(index, choix)}
        />
      ))}
      {nbRepondues === questions.length && questions.length > 0 && (
        <View style={styles.score}>
          <Text style={styles.texteScore}>
            Score : {score} / {questions.length}
          </Text>
          <Bouton libelle="Refaire avec de nouvelles questions" onPress={refaire} />
        </View>
      )}
    </View>
  );
}

interface PropsQuestion {
  numero: number;
  question: Question;
  reponse: string | undefined;
  onChoix: (choix: string) => void;
}

function QuestionQuiz({ numero, question, reponse, onChoix }: PropsQuestion) {
  const repondue = reponse !== undefined;
  const juste = reponse === question.bonneReponse;

  return (
    <View style={styles.question}>
      <Text style={styles.enonce}>
        {numero}. {question.enonce}
      </Text>
      {question.choix.map((choix) => {
        const estBonne = choix === question.bonneReponse;
        const estChoisie = choix === reponse;
        return (
          <Pressable
            key={choix}
            accessibilityRole="button"
            accessibilityState={{ disabled: repondue, selected: estChoisie }}
            disabled={repondue}
            onPress={() => onChoix(choix)}
            style={[
              styles.choix,
              repondue && estBonne && styles.choixJuste,
              repondue && estChoisie && !estBonne && styles.choixFaux,
            ]}
          >
            <Text style={styles.texteChoix}>{choix}</Text>
          </Pressable>
        );
      })}
      {repondue && (
        <View style={styles.correction}>
          <Text style={[styles.verdict, juste ? styles.verdictJuste : styles.verdictFaux]}>
            {juste ? '✓ Bonne réponse !' : `✗ La bonne réponse était : ${question.bonneReponse}`}
          </Text>
          <ExpressionComparee expression={question.expression} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  quiz: { gap: 16 },
  question: { gap: 8 },
  enonce: { fontSize: 16, fontWeight: '600', color: couleurs.texte },
  choix: {
    minHeight: 44,
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: couleurs.bordure,
    backgroundColor: couleurs.carte,
  },
  choixJuste: { backgroundColor: couleurs.fondSucces, borderColor: couleurs.succes },
  choixFaux: { backgroundColor: couleurs.fondErreur, borderColor: couleurs.erreur },
  texteChoix: { fontSize: 16, color: couleurs.texte },
  correction: { gap: 8 },
  verdict: { fontSize: 15, fontWeight: '600' },
  verdictJuste: { color: couleurs.succes },
  verdictFaux: { color: couleurs.erreur },
  score: { gap: 12, alignItems: 'stretch' },
  texteScore: { fontSize: 18, fontWeight: '700', color: couleurs.texte, textAlign: 'center' },
});
