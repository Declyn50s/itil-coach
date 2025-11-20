import type { Question } from "@/types/question";

export const demoQuestions: Question[] = [
  {
    id: "m2_q1",
    text: "Quel devrait être le principal objectif d’une organisation ?",
    options: ["Réduire les coûts","Créer de la valeur","Réduire les risques","Augmenter les ventes"],
    correctIndex: 1,
    explanation: "Dans ITIL, l’objectif central est la co-création de valeur avec les parties prenantes.",
    theme: "module2_concepts_cles",
    difficulty: "easy"
  },
  {
    id: "m2_q2",
    text: "Une relation de service est basée sur plusieurs activités, dont : i La Fourniture de Service, ii La Consommation de Service, iii La Gestion de Service, iv La Gestion des Relations de Service, v La Définition d’un Service.",
    options: ["i et ii seulement","i, ii, et iv","i, ii, iv et v","Toutes"],
    correctIndex: 1,
    explanation: "Les piliers de la relation de service sont la fourniture, la consommation et la gestion des relations.",
    theme: "module2_concepts_cles",
    difficulty: "medium"
  },
  {
    id: "m2_q3",
    text: "Laquelle des propositions suivantes représente l’utilité ?",
    options: ["La Disponibilité d’un service quand le client veut l’utiliser","La Possibilité d’imprimer une facture en cliquant sur un bouton","L’Accès à un Service de facturation depuis un mobile 24/7","La restauration automatique d’un Service en tâche de fond tandis que le client continue à travailler."],
    correctIndex: 1,
    explanation: "L’utilité = fitness for purpose : ce que fait le service (fonctionnalités) pour répondre au besoin.",
    theme: "module2_concepts_cles",
    difficulty: "easy"
  },
  {
    id: "m2_q4",
    text: "Quel énoncé est exact ? i Comprendre la complexité des relations de service et des responsabilités de chaque partie prenante accroît la probabilité de co-création de valeur. ii Comprendre les composantes de la valeur aide à décider des services fournis/consommés. iii Comprendre les responsabilités des rôles peut améliorer la gestion des relations et l’efficacité des négociations et des communications.",
    options: ["i et ii seulement","i et iii seulement","ii et iii seulement","Tous"],
    correctIndex: 3,
    explanation: "Les trois énoncés sont corrects et renforcent la co-création de valeur.",
    theme: "module2_concepts_cles",
    difficulty: "medium"
  },
  {
    id: "m2_q5",
    text: "La valeur pour le consommateur de service :",
    options: ["Change au fil du temps","Change dans diverses situations","Supporte les résultats attendus","Toutes les propositions"],
    correctIndex: 3,
    explanation: "La valeur est contextuelle, évolutive et orientée résultats.",
    theme: "module2_concepts_cles",
    difficulty: "easy"
  },
  {
    id: "m2_q6",
    text: "Laquelle des propositions suivantes est la meilleure description de la garantie ?",
    options: ["Adapté au besoin","Prêt à l’usage","Bon pour du support","Prêt à être fourni"],
    correctIndex: 1,
    explanation: "La garantie = fitness for use (capacité, dispo, continuité, sécurité).",
    theme: "module2_concepts_cles",
    difficulty: "easy"
  },
  {
    id: "m2_q7",
    text: "Quelle proposition fait allusion à une fonctionnalité procurée par un produit ou un service pour satisfaire un besoin particulier ?",
    options: ["La garantie","La fourniture","Le service","L’utilité"],
    correctIndex: 3,
    explanation: "L’utilité désigne ce que fait le service (fonctionnalité) pour le besoin.",
    theme: "module2_concepts_cles",
    difficulty: "easy"
  },
  {
    id: "m2_q8",
    text: "Une personne qui valide le budget pour la consommation d’un service est :",
    options: ["Le client","Le sponsor","La partie prenante","L’utilisateur"],
    correctIndex: 1,
    explanation: "Le sponsor autorise/finance le budget du service.",
    theme: "module2_concepts_cles",
    difficulty: "easy"
  },
  {
    id: "m2_q9",
    text: "Quelle(s) activité(s) est(sont) comprise(s) dans ‘la consommation d’un service’ ? i La gestion des ressources du consommateur nécessaires à l’utilisation du service ii Les utilisations du service, les actions exécutées par les utilisateurs iii La réception (acquisition) de biens",
    options: ["i seulement","i et iii seulement","i et ii seulement","Toutes"],
    correctIndex: 3,
    explanation: "La consommation couvre gestion de ressources, usages et réception de biens.",
    theme: "module2_concepts_cles",
    difficulty: "medium"
  },
  {
    id: "m2_q10",
    text: "La description d’un ou plusieurs services, conçus pour satisfaire les besoins d’un groupe de consommateurs cibles. Un(e) ________ peut comprendre des biens, l’accès aux ressources, et des activités de service.",
    options: ["Solution","Offre de service","Conception de service","Principe de service"],
    correctIndex: 1,
    explanation: "Une offre de service combine biens, accès et activités pour un segment cible.",
    theme: "module2_concepts_cles",
    difficulty: "easy"
  },
  {
    id: "m2_q11",
    text: "Un éventuel événement pouvant engendrer un dommage ou une perte est la définition :",
    options: ["D’un Incident","D’un Problème","D’une association de coût négative","D’un Risque"],
    correctIndex: 3,
    explanation: "Un risque = événement incertain qui, s’il survient, a un impact négatif.",
    theme: "module2_concepts_cles",
    difficulty: "easy"
  },
  {
    id: "m2_q12",
    text: "“Les activités réalisées par une organisation pour fournir des services” s’appelle :",
    options: ["La solution client","La conception de service","La fourniture de service","L’expérience utilisateur"],
    correctIndex: 2,
    explanation: "La fourniture de service regroupe les activités pour délivrer le service.",
    theme: "module2_concepts_cles",
    difficulty: "easy"
  }
];
