import type { Question } from "@/types/question";

export const demoQuestions: Question[] = [
  {
    id: "q1",
    text: "Quel est l'objectif principal de la gestion des incidents ?",
    options: [
      "Réduire au minimum l'impact des incidents sur le business",
      "Prévenir tous les incidents futurs",
      "Documenter les changements dans l'infrastructure",
      "Gérer les relations avec les fournisseurs"
    ],
    correctIndex: 0,
    explanation:
      "La gestion des incidents vise à rétablir un service normal le plus rapidement possible et à réduire l'impact sur l'activité.",
    theme: "practices",
    difficulty: "easy"
  },
  {
    id: "q2",
    text: "Dans ITIL 4, comment est défini un service ?",
    options: [
      "Un ensemble de composants techniques",
      "Un moyen de co-créer de la valeur en facilitant les résultats que les clients veulent obtenir",
      "Une base de données de configuration",
      "Un contrat entre le fournisseur et le client"
    ],
    correctIndex: 1,
    explanation:
      "Dans ITIL 4, un service est un moyen de co-créer de la valeur en facilitant les résultats que les clients veulent obtenir.",
    theme: "concepts",
    difficulty: "easy"
  }
];
