// Outils de tirage au hasard partagés par les quiz. `alea` renvoie un nombre
// dans [0, 1[ : Math.random en production, un générateur à graine en test.
export type Alea = () => number;

export function tirer<T>(liste: readonly T[], alea: Alea): T {
  return liste[Math.floor(alea() * liste.length)];
}

/** Mélange de Fisher-Yates, sur une copie. */
export function melanger<T>(liste: readonly T[], alea: Alea): T[] {
  const copie = [...liste];
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(alea() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie;
}
