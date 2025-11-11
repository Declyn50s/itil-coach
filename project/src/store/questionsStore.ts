import { create } from "zustand";
import { demoQuestions } from "@/data/itilQuestions.seed";
import type { Question, Theme } from "@/types/question";

type QuestionsState = {
  questions: Question[];
  favorites: string[]; // question ids
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  getRandomQuestions: (count: number, theme?: Theme) => Question[];
};

export const useQuestionsStore = create<QuestionsState>((set, get) => ({
  questions: demoQuestions,
  favorites: [],
  toggleFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites.filter((q) => q !== id)
        : [...state.favorites, id]
    })),
  isFavorite: (id) => get().favorites.includes(id),
  getRandomQuestions: (count, theme) => {
    const all = get().questions.filter((q) =>
      theme ? q.theme === theme : true
    );
    const shuffled = [...all].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }
}));
