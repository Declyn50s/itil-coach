export type Difficulty = "easy" | "medium" | "hard";

// Thèmes alignés sur les modules ITIL
export type Theme =
  | "module2_concepts_cles"                // Module 2: Gestion des Services: Concepts-Clés
  | "module3_principes_directeurs"         // Module 3: Les principes directeurs
  | "module4_quatre_dimensions"            // Module 4: Les quatres dimensions de la Gestion des Services
  | "module5_svs"                          // Module 5: Le Système de Valeur des Services ITIL
  | "module6_amelioration_continue"        // Module 6: Amelioration continue
  | "module7_pratiques_itil"              // Module 7: Les pratiques ITIL
  | "exam_sample1";

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  theme: Theme;
  difficulty: Difficulty;
}
