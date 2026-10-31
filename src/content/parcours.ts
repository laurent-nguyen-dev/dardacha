// Registre du parcours : la liste des modules, dans l'ordre d'affichage.
//
// Ajouter un module = créer son fichier dans ./modules et l'ajouter ici
// (docs/ajouter-un-module.md). Rien d'autre dans l'application ne
// dépend du nombre ou de la liste des modules.
import { nouvelles } from './modules/nouvelles';
import { quotidien } from './modules/quotidien';
import { salutations } from './modules/salutations';
import { sms } from './modules/sms';
import type { Module } from './types';

export const parcours: readonly Module[] = [salutations, nouvelles, sms, quotidien];
