import { create } from "zustand";
import type { UserProfile, UserStats } from "@/types/user";
import type { SessionState } from "@/types/session";

type UserStore = {
  profile: UserProfile;
  stats: UserStats;
  updateProfile: (partial: Partial<UserProfile>) => void;
  registerSessionResult: (session: SessionState) => void;
};

const initialProfile: UserProfile = {
  language: "fr",
  reminderFrequency: "daily"
};

const initialStats: UserStats = {
  totalQuestionsAnswered: 0,
  totalSessions: 0,
  totalExams: 0,
  successRateGlobal: 0,
  successByTheme: {}
};

export const useUserStore = create<UserStore>((set, get) => ({
  profile: initialProfile,
  stats: initialStats,
  updateProfile: (partial) =>
    set((state) => ({
      profile: { ...state.profile, ...partial }
    })),
  registerSessionResult: (session) => {
    const prev = get().stats;
    const answers = session.answers;
    const totalAnswered = answers.length;
    if (!totalAnswered) return;

    const correct = answers.filter((a) => a.isCorrect).length;
    const globalCorrect =
      prev.totalQuestionsAnswered * (prev.successRateGlobal / 100) + correct;
    const newTotalQ = prev.totalQuestionsAnswered + totalAnswered;
    const newSuccessGlobal = (globalCorrect / newTotalQ) * 100;

    set({
      stats: {
        ...prev,
        totalQuestionsAnswered: newTotalQ,
        totalSessions: prev.totalSessions + 1,
        totalExams:
          session.type === "exam" ? prev.totalExams + 1 : prev.totalExams,
        successRateGlobal: Math.round(newSuccessGlobal)
      }
    });
  }
}));
