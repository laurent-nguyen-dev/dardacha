import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { couleurs } from '@/theme';

// Layout racine : une pile d'écrans. Le bouton/geste « retour » du téléphone
// dépile l'écran courant (fonctionnel §4).
export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: couleurs.principale },
          headerTintColor: '#ffffff',
          contentStyle: { backgroundColor: couleurs.fond },
        }}
      />
    </>
  );
}
