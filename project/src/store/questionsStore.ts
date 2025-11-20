import { create } from "zustand";
import type { Question, Theme } from "@/types/question";
import { demoQuestions } from "@/data/itilQuestions.seed";         // M2
import { module3Questions } from "@/data/itilQuestions.module3";   // M3
import { module4Questions } from "@/data/itilQuestions.module4";   // M4
import { module5Questions } from "@/data/itilQuestions.module5";   // M5
import { module6Questions } from "@/data/itilQuestions.module6";   // M6
import { module7Questions } from "@/data/itilQuestions.module7";   // M7  <-- AJOUT
import { examSample1 } from "@/data/exams/examSample1";

type QuestionsState = {
  questions: Question[];
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  getRandomQuestions: (count: number, theme?: Theme) => Question[];
};

export const useQuestionsStore = create<QuestionsState>((set, get) => ({
  questions: [
    ...demoQuestions,
    ...module3Questions,
    ...module4Questions,
    ...module5Questions,
    ...module6Questions,
    ...module7Questions, // <-- AJOUT
    ...examSample1,
  ],
  favorites: [],
  toggleFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites.filter((q) => q !== id)
        : [...state.favorites, id]
    })),
  isFavorite: (id) => get().favorites.includes(id),
  getRandomQuestions: (count, theme) => {
    const all = get().questions.filter((q) => (theme ? q.theme === theme : true));
    const shuffled = [...all].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }
}));
