import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { ExpressionComparee } from '@/components/Variantes';
import { parcours } from '@/content/parcours';
import { fichesRevision } from '@/logic/revisions';
import { couleurs } from '@/theme';

// F11 : révisions — fiches groupées par module, trois variantes, sens et
// écoute par variante.
export default function Revisions() {
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Stack.Screen options={{ title: 'Révisions' }} />
      {fichesRevision(parcours).map(({ module, numeroModule, expressions }) => (
        <View key={module.id} style={styles.groupe}>
          <Text style={styles.titreModule} accessibilityRole="header">
            {module.icone} Module {numeroModule} · {module.titre}
          </Text>
          {expressions.map((expression, index) => (
            <ExpressionComparee key={`${expression.sens}-${index}`} expression={expression} />
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { padding: 16, gap: 24 },
  groupe: { gap: 8 },
  titreModule: { fontSize: 17, fontWeight: '700', color: couleurs.principale },
});
