import type { Theme } from "@/types/question";

export const THEME_OPTIONS: { value: Theme; label: string }[] = [
  { value: "module2_concepts_cles", label: "Module 2: Gestion des Services: Concepts-Clés" },
  { value: "module3_principes_directeurs", label: "Module 3: Les principes directeurs" },
  { value: "module4_quatre_dimensions", label: "Module 4: Les quatres dimensions de la Gestion des Services" },
  { value: "module5_svs", label: "Module 5: Le Système de Valeur des Services ITIL" },
  { value: "module6_amelioration_continue", label: "Module 6: Amelioration continue" },
  { value: "module7_pratiques_itil", label: "Module 7: Les pratiques ITIL" },
  { value: "exam_sample1", label: "Échantillon d’examen – 1" }
]as const;

export const THEME_LABELS: Record<Theme, string> = {
  module2_concepts_cles: "Module 2: Gestion des Services: Concepts-Clés",
  module3_principes_directeurs: "Module 3: Les principes directeurs",
  module4_quatre_dimensions: "Module 4: Les quatres dimensions de la Gestion des Services",
  module5_svs: "Module 5: Le Système de Valeur des Services ITIL",
  module6_amelioration_continue: "Module 6: Amelioration continue",
  module7_pratiques_itil: "Module 7: Les pratiques ITIL",
  exam_sample1: "Échantillon d’examen – 1"
}as const;
