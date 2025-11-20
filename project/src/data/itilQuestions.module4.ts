import type { Question } from "@/types/question";

export const module4Questions: Question[] = [
  {
    id: "m4_q1",
    text: "Quelles options ci-après définissent correctement les quatre dimensions de la gestion des services ?",
    options: [
      "Personnes, Aspects sociaux, Processus, Economie",
      "Information, Organisation, Flux de Valeur, Processus",
      "Organisation, Information, Partenaires, Processus",
      "Fournisseurs, Personnes, Automatisation, Valeur"
    ],
    correctIndex: 2, // c)
    explanation: "Les 4 dimensions ITIL: Organisations & personnes; Information & technologie; Partenaires & fournisseurs; Flux de valeur & processus.",
    theme: "module4_quatre_dimensions",
    difficulty: "easy"
  },
  {
    id: "m4_q2",
    text: "Dans le cas d’un service IT spécifique, quelle Dimension comprend l’information créée ainsi que les technologies qui permettent que ce service IT fonctionne et soit soutenu ?",
    options: [
      "Organisations et personnes",
      "Information et technologie",
      "Partenaires et fournisseurs",
      "Flux de valeur et processus"
    ],
    correctIndex: 1, // b)
    explanation: "« Information & technologie » couvre données, applications, infra, outils et sécurité.",
    theme: "module4_quatre_dimensions",
    difficulty: "easy"
  },
  {
    id: "m4_q3",
    text: "Quel est le périmètre d’application des quatre dimensions de la gestion des services ?",
    options: [
      "Tous les services gérés seulement",
      "Le système de valeur des service",
      "Les consommateurs et les utilisateurs seulement",
      "Tous les services et le système de valeur des services"
    ],
    correctIndex: 3, // d)
    explanation: "Les 4 dimensions s’appliquent à l’ensemble des services ET au SVS.",
    theme: "module4_quatre_dimensions",
    difficulty: "easy"
  },
  {
    id: "m4_q4",
    text: "Laquelle des 4 dimensions de la gestion des services définit les activités, les flux, les contrôles et les procédures nécessaires pour atteindre des objectifs attendus ?",
    options: [
      "Organisations et personnes",
      "Information et technologie",
      "Partenaires et fournisseurs",
      "Flux de valeur et processus"
    ],
    correctIndex: 3, // d)
    explanation: "« Flux de valeur & processus » décrit comment le travail circule pour créer la valeur.",
    theme: "module4_quatre_dimensions",
    difficulty: "easy"
  },
  {
    id: "m4_q5",
    text: "Une organisation est très hiérarchique avec une pensée en silos et de la stigmatisation quand un problème surgit. Quelle dimension retravailler en priorité ?",
    options: [
      "Organisations et personnes",
      "Information et technologie",
      "Partenaires et fournisseurs",
      "Flux de valeur et processus"
    ],
    correctIndex: 0, // a)
    explanation: "Culture, leadership, rôles et compétences relèvent de « Organisations & personnes ».",
    theme: "module4_quatre_dimensions",
    difficulty: "medium"
  },
  {
    id: "m4_q6",
    text: "Quelle dimension est clé pour évaluer nos compétences internes et décider d’externaliser des fonctions non assurées en interne vers des tierces parties ?",
    options: [
      "Organisations et personnes",
      "Information et technologie",
      "Partenaires et fournisseurs",
      "Flux de valeur et processus"
    ],
    correctIndex: 2, // c)
    explanation: "« Partenaires & fournisseurs » traite du sourcing, contrats, risques et dépendances.",
    theme: "module4_quatre_dimensions",
    difficulty: "medium"
  },
  {
    id: "m4_q7",
    text: "Le principe d’optimisation et d’automatisation exige un niveau approprié de mobilisation des intervenants. C’est :",
    options: [
      "L’allocation du budget",
      "L’attribution des ressources",
      "La durée de l’exécution",
      "L’engagement des parties prenantes"
    ],
    correctIndex: 3, // d)
    explanation: "L’optimisation réussit avec un fort engagement des parties prenantes (adoption & change).",
    theme: "module4_quatre_dimensions",
    difficulty: "easy"
  }
];
