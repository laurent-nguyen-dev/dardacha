// Audit de sécurité des dépendances, utilisé par la CI.
//
// Échoue si `npm audit` signale une vulnérabilité de gravité « high » ou
// « critical », sauf si elle figure dans audit-allowlist.json avec une
// justification écrite. Une entrée de cette liste est une décision, pas un
// oubli : voir docs/technique.md §6.
const { execSync } = require('node:child_process');
const allowlist = require('../audit-allowlist.json');

const GRAVITES_BLOQUANTES = ['high', 'critical'];

function lireAudit() {
  try {
    return execSync('npm audit --json', { encoding: 'utf8' });
  } catch (erreur) {
    // npm audit sort en erreur dès qu'il trouve une vulnérabilité, mais
    // écrit quand même son rapport JSON sur la sortie standard.
    return erreur.stdout;
  }
}

const rapport = JSON.parse(lireAudit());
const autorises = new Set(allowlist.paquets.map((entree) => entree.paquet));
const bloquants = [];

for (const [paquet, vulnerabilite] of Object.entries(rapport.vulnerabilities ?? {})) {
  if (!GRAVITES_BLOQUANTES.includes(vulnerabilite.severity)) continue;
  if (autorises.has(paquet)) continue;
  bloquants.push(`${paquet} (${vulnerabilite.severity})`);
}

if (bloquants.length > 0) {
  console.error('Vulnérabilités bloquantes non justifiées :');
  for (const ligne of bloquants) console.error(`  - ${ligne}`);
  process.exit(1);
}
console.log('Audit des dépendances : aucune vulnérabilité bloquante non justifiée.');
