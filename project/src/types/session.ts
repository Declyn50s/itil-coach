import type { Question } from "./question";

export type SessionType = "learn" | "test" | "exam" | "favorites";

export interface UserAnswer {
  questionId: string;
  selectedIndex: number;
  isCorrect: boolean;
}

export interface SessionState {
  id: string;
  type: SessionType;
  questions: Question[];
  currentIndex: number;
  answers: UserAnswer[];
  startedAt: string;
  endsAt?: string;
  finished: boolean;
}
