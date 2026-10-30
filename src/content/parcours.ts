// Registre du parcours : la liste des modules, dans l'ordre d'affichage.
//
// Ajouter un module = créer son fichier dans ./modules et l'ajouter ici
// (docs/ajouter-un-module.md). Rien d'autre dans l'application ne
// dépend du nombre ou de la liste des modules.
import { salutations } from './modules/salutations';
import type { Module } from './types';

export const parcours: readonly Module[] = [salutations];
