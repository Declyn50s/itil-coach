import type { Question } from "@/types/question";

export const module3Questions: Question[] = [
  {
    id: "m3_q1",
    text: "Collaborer et promouvoir la visibilité est:",
    options: [
      "Un composant-clé de la création de valeur",
      "Une activité ou une métrrique fournissant de la visibilité",
      "Un principe directeur",
      "Une dimension de la gestion des services"
    ],
    correctIndex: 2, // c)
    explanation: "« Collaborer et promouvoir la visibilité » est l’un des 7 principes directeurs d’ITIL 4.",
    theme: "module3_principes_directeurs",
    difficulty: "easy"
  },
  {
    id: "m3_q2",
    text: "Lequel des principes directeurs suivants évoque le fait de trouver l’équilibre entre comprendre la situation globale et le fait que des progrès sont toujours faisables ?",
    options: [
      "Commencez là où vous êtes",
      "Progressez par itérations",
      "Optimisez et automatisez",
      "Faites simple et pratique"
    ],
    correctIndex: 1, // b)
    explanation: "« Progressez par itérations » recommande d’avancer par petits incréments tout en gardant la vision d’ensemble.",
    theme: "module3_principes_directeurs",
    difficulty: "easy"
  },
  {
    id: "m3_q3",
    text: "Quel principe directeur évoque l’utilisation des préconisations Kanban ou Scrum par les développeurs ?",
    options: [
      "Optimisez et automatisez",
      "Pensez et travailllez de manière holistique",
      "Faites simple et pratique",
      "Collaborez et promouvez la visibilité"
    ],
    correctIndex: 3, // d)
    explanation: "La collaboration et la visibilité sont au cœur de Kanban/Scrum (tableaux, revues, stand-ups).",
    theme: "module3_principes_directeurs",
    difficulty: "easy"
  },
  {
    id: "m3_q4",
    text: "Quel(s) énoncé(s) évoque(nt) le meilleur usage des principes directeurs d’ITIL ? i Utiles pour adopter une approche de gestion des services. ii Aident à adapter ITIL aux besoins spécifiques. iii Doivent être utilisés pour mettre en place une nouvelle technologie.",
    options: [
      "iii seulement",
      "i et iii seulement",
      "i et ii seulement",
      "Tous"
    ],
    correctIndex: 2, // c)
    explanation: "i et ii sont corrects; iii est trop prescriptif (les principes guident, ils ne dictent pas une techno).",
    theme: "module3_principes_directeurs",
    difficulty: "medium"
  },
  {
    id: "m3_q5",
    text: "Quel énoncé est correct au sujet des principes directeurs ?",
    options: [
      "Ils sont propres à ITIL4.",
      "Ils ne peuvent pas être implémentés les uns avec les autres.",
      "On les retrouve dans de nombreux autres référentiels.",
      "Ils sont issus d’un ensemble de connaissances externe."
    ],
    correctIndex: 2, // c)
    explanation: "Ces principes sont transverses et se retrouvent dans d’autres cadres (Lean, Agile, DevOps…).",
    theme: "module3_principes_directeurs",
    difficulty: "easy"
  },
  {
    id: "m3_q6",
    text: "Quel principe directeur évoque: « L’état actuel devrait être investigué et observé directement pour s’assurer qu’il est pleinement compris » ?",
    options: [
      "Faites simple et pratique",
      "Progressez par itérations et commentaires",
      "Optimisez et automatisez",
      "Commencez là où vous êtes"
    ],
    correctIndex: 3, // d)
    explanation: "« Commencez là où vous êtes » impose de comprendre la réalité existante avant de changer.",
    theme: "module3_principes_directeurs",
    difficulty: "easy"
  },
  {
    id: "m3_q7",
    text: "Quel principe directeur évoque qu’aucun service ou élément utilisé pour fournir un service n’est indépendant ?",
    options: [
      "Faites simple et pratique",
      "Pensez et travaillez de manière holistique",
      "Optimisez et automatisez",
      "Mettez le focus sur la valeur"
    ],
    correctIndex: 1, // b)
    explanation: "« Holistique » = considérer l’ensemble du système, ses interactions et dépendances.",
    theme: "module3_principes_directeurs",
    difficulty: "easy"
  },
  {
    id: "m3_q8",
    text: "Quel principe directeur évoque que « Les ressources de tous types, en particulier les ressources humaines, devraient être utilisées à leur maximum » ?",
    options: [
      "Faites simple et pratique",
      "Pensez et travaillez de manière holistique",
      "Optimisez et automatisez",
      "Mettez le focus sur la valeur"
    ],
    correctIndex: 2, // c)
    explanation: "« Optimisez et automatisez » vise à éliminer le gaspillage et à maximiser l’usage des ressources.",
    theme: "module3_principes_directeurs",
    difficulty: "medium"
  },
  {
    id: "m3_q9",
    text: "Quel principe directeur évoque qu’il faut utiliser une réflexion axée sur les résultats pour produire des solutions pratiques qui donnent des résultats ?",
    options: [
      "Faites simple et pratique",
      "Commencez là où vous êtes",
      "Optimisez et automatisez",
      "Collaborez et promouvez la visibilité"
    ],
    correctIndex: 0, // a)
    explanation: "« Faites simple et pratique » = orienté résultats, solutions pragmatiques et utiles.",
    theme: "module3_principes_directeurs",
    difficulty: "easy"
  },
  {
    id: "m3_q10",
    text: "Quel principe directeur indique « Savoir comment les utilisateurs de services utilisent chaque service est important » ?",
    options: [
      "Faites simple et pratique",
      "Commencez là où vous êtes",
      "Mettez le focus sur la valeur",
      "Pensez et travaillez de manière holistique"
    ],
    correctIndex: 2, // c)
    explanation: "« Focus sur la valeur » impose de comprendre l’usage réel et les résultats attendus.",
    theme: "module3_principes_directeurs",
    difficulty: "easy"
  },
  {
    id: "m3_q11",
    text: "Complétez le mot manquant: _______ est un aspect important du principe directeur « Commencez là où vous êtes ».",
    options: [
      "La mesure",
      "La valeur",
      "Le coût",
      "L’engagement"
    ],
    correctIndex: 0, // a)
    explanation: "Mesurer/observer l’existant (données, métriques) avant de décider des changements.",
    theme: "module3_principes_directeurs",
    difficulty: "easy"
  },
  {
    id: "m3_q12",
    text: "Complétez: Prendre en compte les commentaires appropriés est la clé de _________ et de l’orientation vers ce qui sera utile au client pour que les choses lui demeurent simples et pratiques.",
    options: [
      "La valeur",
      "La pensée holistique",
      "La collaboration",
      "Les relations"
    ],
    correctIndex: 2, // c)
    explanation: "La collaboration inclut la boucle de feedback pour s’améliorer et rester utile.",
    theme: "module3_principes_directeurs",
    difficulty: "easy"
  }
];
