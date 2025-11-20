import type { Question } from "@/types/question";

export const module5Questions: Question[] = [
  {
    id: "m5_q1",
    text: "Quelle choix correspond à « options ou possibilités de création de valeur » ?",
    options: ["Demande", "Valeur", "Pratiques", "Opportunité"],
    correctIndex: 3, // d
    explanation: "En ITIL 4, une opportunité est une possibilité de créer de la valeur.",
    theme: "module5_svs",
    difficulty: "easy"
  },
  {
    id: "m5_q2",
    text: "Quel est le résultat du Système de Valeur des Services d’ITIL ?",
    options: ["Les principes directeurs", "La valeur", "Les pratiques", "L’opportunité"],
    correctIndex: 1, // b
    explanation: "Le SVS vise la co-création de valeur comme résultat final.",
    theme: "module5_svs",
    difficulty: "easy"
  },
  {
    id: "m5_q3",
    text: "Le Système de Valeur des Services d’ITIL a été conçu pour permettre ______ et décourager le travail ______.",
    options: ["La flexibilité / en silo", "Les processus / procédural", "Les pratiques / rapide", "Les opportunités / en silo"],
    correctIndex: 0, // a
    explanation: "Le SVS favorise l’adaptabilité et évite les silos organisationnels.",
    theme: "module5_svs",
    difficulty: "easy"
  },
  {
    id: "m5_q4",
    text: "Quel composant ITIL4 constitue l’élément clé fournissant un modèle holistique pour orienter les relations de service ?",
    options: ["Une pratique ITIL", "Le système de valeur des services", "La chaîne de valeur de service", "Le modèle d’amélioration continue"],
    correctIndex: 1, // b
    explanation: "Le SVS cadre l’ensemble des relations, composants et activités.",
    theme: "module5_svs",
    difficulty: "medium"
  },
  {
    id: "m5_q5",
    text: "« Ensemble de ressources organisationnelles conçues pour réaliser un travail ou aboutir à un résultat ». Dans le SVS, il s’agit :",
    options: ["Des processus", "Des dimensions", "Des pratiques", "Des valeurs"],
    correctIndex: 2, // c
    explanation: "Une pratique = ressources, compétences, infos, outils organisés pour un résultat.",
    theme: "module5_svs",
    difficulty: "easy"
  },
  {
    id: "m5_q6",
    text: "Utiliser les connaissances actuelles pour comprendre la situation et fournir un cadre de programmation illustre quelle activité de la chaîne de valeur ?",
    options: ["Impliquer", "Planifier", "Améliorer", "Conception"],
    correctIndex: 3, // d
    explanation: "La conception & transition se base sur les exigences/infos pour cadrer la solution.",
    theme: "module5_svs",
    difficulty: "medium"
  },
  {
    id: "m5_q7",
    text: "Dans la chaîne de valeur, chaque activité transforme des ________ spécifiques en ________.",
    options: ["Opportunités/entrées", "Processus/pratiques", "Entrées/livrables", "Opportunités/Améliorations"],
    correctIndex: 2, // c
    explanation: "Chaque activité prend des entrées et produit des livrables (outputs).",
    theme: "module5_svs",
    difficulty: "easy"
  },
  {
    id: "m5_q8",
    text: "Une compréhension commune de la vision, de l’état actuel et de l’orientation d’amélioration est l’objectif de :",
    options: ["Obtenir/construire", "Planifier", "Améliorer", "Conception"],
    correctIndex: 1, // b
    explanation: "« Planifier » aligne vision, statut et direction sur tout le portefeuille.",
    theme: "module5_svs",
    difficulty: "easy"
  },
  {
    id: "m5_q9",
    text: "Bonne compréhension des besoins des parties prenantes, transparence et bonnes relations : objectif de quelle activité ?",
    options: ["Impliquer", "Conception et transition", "Obtenir/construire", "Améliorer"],
    correctIndex: 0, // a
    explanation: "« Impliquer » gère relations, attentes et communication avec les parties prenantes.",
    theme: "module5_svs",
    difficulty: "easy"
  },
  {
    id: "m5_q10",
    text: "En tenant compte des spécifications convenues, assurer la disponibilité des composantes de service est l’objectif de :",
    options: ["Planifier", "Impliquer", "Conception et transition", "Obtenir/construire"],
    correctIndex: 3, // d
    explanation: "« Obtenir/Construire » veille à la disponibilité des composants conformes aux specs.",
    theme: "module5_svs",
    difficulty: "easy"
  }
];
