// Séances terminées : état partagé par tous les écrans et conservé sur
// l'appareil (fonctionnel §6.4, technique §2.1).
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, type ReactNode, useCallback, useContext, useEffect, useState } from 'react';

import { ecrireProgression, lireProgression } from '@/logic/progression';

/** Clé versionnée : un futur changement de format utilisera `progression:v2`. */
export const CLE_STOCKAGE = 'progression:v1';

interface ContexteProgression {
  terminees: ReadonlySet<string>;
  marquerTerminee: (seanceId: string) => void;
  reinitialiser: () => void;
}

const Contexte = createContext<ContexteProgression | null>(null);

export function ProgressionProvider({ children }: { children: ReactNode }) {
  const [terminees, setTerminees] = useState<ReadonlySet<string>>(new Set());

  // Lecture au démarrage. Fusion avec l'état courant, au cas où une séance
  // aurait été terminée pendant la lecture.
  useEffect(() => {
    AsyncStorage.getItem(CLE_STOCKAGE)
      .then((texte) => {
        const enregistrees = lireProgression(texte);
        setTerminees((courantes) => new Set([...enregistrees, ...courantes]));
      })
      .catch(() => {
        // Stockage indisponible : l'application reste utilisable, la
        // progression vit seulement le temps de la session.
      });
  }, []);

  const enregistrer = useCallback((nouvelles: ReadonlySet<string>) => {
    setTerminees(nouvelles);
    AsyncStorage.setItem(CLE_STOCKAGE, ecrireProgression(nouvelles)).catch(() => {
      // Même règle que ci-dessus : on garde l'état en mémoire.
    });
  }, []);

  const marquerTerminee = useCallback(
    (seanceId: string) => enregistrer(new Set([...terminees, seanceId])),
    [terminees, enregistrer],
  );

  const reinitialiser = useCallback(() => enregistrer(new Set()), [enregistrer]);

  return (
    <Contexte.Provider value={{ terminees, marquerTerminee, reinitialiser }}>
      {children}
    </Contexte.Provider>
  );
}

function useContexteProgression(): ContexteProgression {
  const contexte = useContext(Contexte);
  if (!contexte) {
    throw new Error("ProgressionProvider manquant autour de l'application.");
  }
  return contexte;
}

export function useSeancesTerminees(): ReadonlySet<string> {
  return useContexteProgression().terminees;
}

export function useActionsProgression() {
  const { marquerTerminee, reinitialiser } = useContexteProgression();
  return { marquerTerminee, reinitialiser };
}
