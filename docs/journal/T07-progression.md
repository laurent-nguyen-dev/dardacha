# T07 — Progression enregistrée

**Fait** : bouton « Marquer comme terminée » (F05), progression conservée
sur l'appareil (F06), « Réinitialiser » dans la barre avec confirmation
(F13). 4 tests du format de stockage, 4 tests d'écrans.

## Pourquoi

- **Format de stockage séparé du stockage** : `logic/progression.ts`
  transforme l'ensemble des séances terminées en texte JSON et inversement.
  Fonctions pures, testées seules, y compris sur des données abîmées
  (progression vide plutôt que plantage).
- **Contexte React** (`services/progression.tsx`) : un seul état partagé
  par tous les écrans ; marquer une séance met à jour en même temps la
  barre de progression, la carte du module et la page du module.
- **Clé versionnée `progression:v1`** : si le format change un jour, on
  lira l'ancienne clé pour migrer, sans perdre la progression.
- **Échec du stockage ignoré** : l'état en mémoire reste juste, conforme à
  la règle « l'application reste utilisable » (fonctionnel §6.4).
- **Fusion au démarrage** : si une séance est terminée pendant la lecture du
  stockage (quelques millisecondes), elle n'est pas écrasée.
- Les écrans n'ont pas changé : ils passaient déjà par le hook
  `useSeancesTerminees` (T05).

## Notions

- **AsyncStorage** : petit stockage clé → texte, propre à l'application,
  conservé entre deux lancements ; effacé si l'application est
  désinstallée.
- **Contexte React** (`createContext`, `Provider`, `useContext`) : rend une
  valeur accessible à tous les composants en dessous, sans la passer de
  parent en enfant. Le `ProgressionProvider` entoure toute l'application
  dans le layout racine.
- **`useEffect(…, [])`** : code lancé une fois, à l'affichage du composant
  (ici, la lecture du stockage).
- **`useCallback`** : garde la même fonction d'un affichage à l'autre tant
  que ses dépendances ne changent pas.
- **Simulation en test** : le stockage natif est remplacé par une version
  en mémoire (`jest.setup.ts`), et `Alert.alert` par une fonction qui
  « appuie » sur le bouton voulu de la boîte de dialogue.
