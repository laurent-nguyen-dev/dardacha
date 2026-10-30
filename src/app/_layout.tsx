import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BarreOutils } from '@/components/BarreOutils';
import { BarreProgression } from '@/components/BarreProgression';
import { parcours } from '@/content/parcours';
import { progressionGlobale } from '@/logic/parcours';
import { useSeancesTerminees } from '@/services/progression';
import { couleurs } from '@/theme';

// Layout racine : une pile d'écrans (le bouton/geste « retour » dépile
// l'écran courant, fonctionnel §4), puis, sous tous les écrans, la
// progression globale (F06) et la barre permanente.
export default function RootLayout() {
  const terminees = useSeancesTerminees();
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: couleurs.fond }}>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: couleurs.principale },
          headerTintColor: '#ffffff',
          headerBackTitle: 'Retour',
          contentStyle: { backgroundColor: couleurs.fond },
        }}
      />
      <View style={{ backgroundColor: couleurs.carte, paddingBottom: bottom }}>
        <BarreProgression progression={progressionGlobale(parcours, terminees)} />
        <BarreOutils />
      </View>
    </View>
  );
}
