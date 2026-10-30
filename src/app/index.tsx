import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { couleurs } from '@/theme';

export default function Menu() {
  return (
    <View style={styles.conteneur}>
      <Stack.Screen options={{ title: 'Arabe au quotidien' }} />
      <Text style={styles.titre}>Arabe au quotidien</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteneur: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  titre: { fontSize: 22, fontWeight: '700', color: couleurs.texte },
});
