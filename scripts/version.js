// Fixe le numéro de version de l'application (app.json et package.json).
//
// Usage : node scripts/version.js 1.2.0
//
// Android n'accepte une mise à jour que si son numéro interne (versionCode)
// est supérieur ou égal à celui de la version installée : il est calculé à
// partir de la version, majeur × 10 000 + mineur × 100 + correctif
// (1.2.0 → 10200). Utilisé à la main, et par le workflow « Publier une
// version » (.github/workflows/release.yml).
const fs = require('node:fs');
const path = require('node:path');

const version = process.argv[2];
const morceaux = /^(\d+)\.(\d+)\.(\d+)$/.exec(version ?? '');
if (!morceaux) {
  console.error('Usage : node scripts/version.js MAJEUR.MINEUR.CORRECTIF (ex. 1.2.0)');
  process.exit(1);
}
const [majeur, mineur, correctif] = morceaux.slice(1).map(Number);
if (mineur > 99 || correctif > 99) {
  console.error('Mineur et correctif doivent rester inférieurs à 100.');
  process.exit(1);
}
const versionCode = majeur * 10000 + mineur * 100 + correctif;

// Racine du dépôt : le dossier parent de scripts/, quel que soit le dossier
// d'où le script est lancé.
const racine = path.join(path.dirname(process.argv[1]), '..');

function modifierJson(fichier, modifier) {
  const chemin = path.join(racine, fichier);
  const donnees = JSON.parse(fs.readFileSync(chemin, 'utf8'));
  modifier(donnees);
  fs.writeFileSync(chemin, JSON.stringify(donnees, null, 2) + '\n');
}

modifierJson('app.json', (app) => {
  app.expo.version = version;
  app.expo.android.versionCode = versionCode;
});
modifierJson('package.json', (paquet) => {
  paquet.version = version;
});
console.log(`Version ${version} (versionCode Android ${versionCode}).`);
