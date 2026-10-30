# T09 — Écoute (F07)

**Fait** : bouton « 🔊 Écouter » pour chaque forme, dans les expressions
supplémentaires, le tableau de vocabulaire (icône seule) et le
mini-dialogue. Choix de la voix avec repli, message si aucune voix arabe.
8 tests (6 de règles, 2 d'écran).

## Pourquoi

- **Règles pures / appel natif séparés** : `logic/audio.ts` décide (quelle
  voix, quel texte), `services/audio.ts` exécute. Les règles se testent
  sans téléphone ni synthèse vocale.
- **Texte préparé avant lecture** (spécification amendée, fonctionnel §6.3) :
  sans cela, la voix lirait « (à un homme) », « slash », et « 7 » comme le
  nombre sept. La prononciation reste approximative (transcription latine
  lue par une voix arabe) — c'est l'évolution n°2 (écriture arabe) qui
  réglera vraiment ce point.
- **Liste de voix vide ≠ aucune voix arabe** : certains téléphones Android
  renvoient une liste vide tant que le moteur n'est pas prêt. Dans ce cas on
  demande la lecture par code de langue plutôt que d'afficher à tort « pas
  de voix arabe ».
- **`Speech.stop()` avant chaque lecture** : une nouvelle lecture
  interrompt la précédente.
- Dépendance : expo-speech 58 (MIT), version du SDK, incluse dans Expo Go.

## Notions

- **Type union discriminé** (`ChoixVoix`) : `{ statut: 'voix', voix }`,
  `{ statut: 'langue' }` ou `{ statut: 'aucune' }`. Après un test sur
  `statut`, TypeScript sait quels champs existent ; impossible d'oublier un
  cas sans qu'il le signale.
- **Expression régulière** : `/\([^)]*\)/g` = « une parenthèse ouvrante, tout
  sauf une parenthèse fermante, une parenthèse fermante », partout dans le
  texte (`g`).
- **`jest.mocked(…).mockResolvedValue(…)`** : dans un test, fait répondre
  la fonction simulée du téléphone avec la liste de voix voulue.
