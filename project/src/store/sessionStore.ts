import { create } from "zustand";
import type { Question } from "@/types/question";
import type { SessionState, SessionType, UserAnswer } from "@/types/session";

type SessionStore = {
  currentSession: SessionState | null;
  startSession: (type: SessionType, questions: Question[]) => void;
  answerCurrent: (selectedIndex: number) => void;
  goNext: () => void;
  finishSession: () => void;
};

const createSession = (type: SessionType, questions: Question[]): SessionState => ({
  id: `${type}-${Date.now()}`,
  type,
  questions,
  currentIndex: 0,
  answers: [],
  startedAt: new Date().toISOString(),
  finished: false
});

export const useSessionStore = create<SessionStore>((set, get) => ({
  currentSession: null,
  startSession: (type, questions) => {
    set({ currentSession: createSession(type, questions) });
  },
  answerCurrent: (selectedIndex) => {
    const session = get().currentSession;
    if (!session || session.finished) return;

    const currentQuestion = session.questions[session.currentIndex];
    const isCorrect = selectedIndex === currentQuestion.correctIndex;

    const answer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedIndex,
      isCorrect
    };

    const existingIndex = session.answers.findIndex(
      (a) => a.questionId === currentQuestion.id
    );
    let answers: UserAnswer[];

    if (existingIndex >= 0) {
      answers = [...session.answers];
      answers[existingIndex] = answer;
    } else {
      answers = [...session.answers, answer];
    }

    set({
      currentSession: {
        ...session,
        answers
      }
    });
  },
  goNext: () => {
    const session = get().currentSession;
    if (!session) return;

    const nextIndex = session.currentIndex + 1;
    if (nextIndex >= session.questions.length) {
      set({
        currentSession: {
          ...session,
          finished: true,
          endsAt: new Date().toISOString()
        }
      });
    } else {
      set({
        currentSession: {
          ...session,
          currentIndex: nextIndex
        }
      });
    }
  },
  finishSession: () => {
    const session = get().currentSession;
    if (!session) return;
    set({
      currentSession: {
        ...session,
        finished: true,
        endsAt: new Date().toISOString()
      }
    });
  }
}));
