import type { Question } from "@/types/question";

export const module6Questions: Question[] = [
  {
    id: "m6_q1",
    text: "Qui est responsable de l’Amélioration Continue dans une organisation ?",
    options: [
      "Le propriétaire du service uniquement",
      "Les acteurs de la chaîne de valeur des services",
      "Les chefs de projet responsables de l’initiative d’amélioration",
      "Chaque membre de l’organisation"
    ],
    correctIndex: 3, // d
    explanation: "En ITIL 4, l’amélioration continue est une responsabilité partagée par toute l’organisation.",
    theme: "module6_amelioration_continue",
    difficulty: "easy"
  },
  {
    id: "m6_q2",
    text: "Quel est le bon résumé du Modèle d’Amélioration Continue d’ITIL ?",
    options: [
      "Quelle est la vision ? Où sommes-nous actuellement ? Où voulons-nous être ? Comment y parvenir ? Y sommes-nous parvenus ?",
      "Où voulons-nous être ? Quelle est la vision ? Où voulons-nous être ? Y sommes-nous parvenus ? Comment maintenir cet élan ?",
      "Quelle est la vision ? Où sommes-nous actuellement ? Où voulons-nous être ? Comment y parvenir ? Y sommes-nous parvenus ? Comment maintenir cet élan ?",
      "Quelle est la vision ? Où sommes-nous actuellement ? Où voulons-nous être ? Comment y parvenir ? Agir. Y sommes-nous parvenus ? Comment maintenir cet élan ?"
    ],
    correctIndex: 3, // d
    explanation: "La séquence ITIL inclut explicitement l’étape « Agir » entre la planification et la vérification des résultats.",
    theme: "module6_amelioration_continue",
    difficulty: "medium"
  },
  {
    id: "m6_q3",
    text: "Quelle est l’activité principale de l’étape « Où sommes-nous actuellement ? » ?",
    options: [
      "Vérification des progrès",
      "Évaluation des services existants",
      "Analyse de l’écart",
      "Planification de résolution des problèmes"
    ],
    correctIndex: 1, // b
    explanation: "On dresse l’état des lieux (évaluation de l’existant) pour objectiver la situation avant d’analyser les écarts.",
    theme: "module6_amelioration_continue",
    difficulty: "easy"
  },
  {
    id: "m6_q4",
    text: "Mesure des progrès accomplis, gestion des risques et sensibilisation aux initiatives : ces activités sont essentielles pour quelle étape du modèle ?",
    options: [
      "Quelle est la vision ?",
      "Comment y parvenir ?",
      "Agir.",
      "Comment maintenir cet élan ?"
    ],
    correctIndex: 2, // c
    explanation: "« Agir » couvre l’exécution du plan, le suivi des risques, la mesure de l’avancement et la communication associée.",
    theme: "module6_amelioration_continue",
    difficulty: "medium"
  }
];
