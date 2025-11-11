export type Difficulty = "easy" | "medium" | "hard";

export type Theme =
  | "concepts"
  | "practices"
  | "dimensions"
  | "svs"
  | "other";

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  theme: Theme;
  difficulty: Difficulty;
}
