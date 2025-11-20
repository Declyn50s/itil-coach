import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import type { Theme } from "@/types/question";
import { useQuestionsStore } from "@/store/questionsStore";
import { useSessionStore } from "@/store/sessionStore";
import { SessionHeader } from "@/components/session/SessionHeader";
import { QuestionCard } from "@/components/question/QuestionCard";
import { SessionFooter } from "@/components/session/SessionFooter"; // si tu l'utilises ailleurs
import { THEME_LABELS } from "@/constants/themes"; // ← source unique

export const ExamRunPage: React.FC = () => {
  const location = useLocation();
  const { theme, questionsCount = 40 } = (location.state || {}) as {
    theme?: Theme;
    questionsCount?: number;
  };

  const getRandomQuestions = useQuestionsStore((s) => s.getRandomQuestions);
  const { currentSession, startSession, answerCurrent, goNext } = useSessionStore();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!currentSession) {
      const q = getRandomQuestions(questionsCount, theme);
      startSession("exam", q);
    }
  }, [currentSession, getRandomQuestions, questionsCount, theme, startSession]);

  if (!currentSession) return null;

  const question = currentSession.questions[currentSession.currentIndex];
  const finished = currentSession.finished;

  const onValidateAndNext = () => {
    if (selectedIndex === null) return;
    // En examen : on enregistre la réponse, PAS de feedback, on passe à la suivante
    answerCurrent(selectedIndex);
    setSelectedIndex(null);
    goNext();
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <SessionHeader
          type="exam"
          currentIndex={currentSession.currentIndex}
          total={currentSession.questions.length}
        />
        {theme && (
          <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
            {THEME_LABELS[theme] ?? theme}
          </span>
        )}
      </div>

      {!finished ? (
        <>
          <QuestionCard
            question={question}
            selectedIndex={selectedIndex}
            showFeedback={false} // pas de feedback pendant l’examen
            onSelect={(index) => setSelectedIndex(index)}
          />
          <div className="flex justify-end">
            <button
              onClick={onValidateAndNext}
              disabled={selectedIndex === null}
              className={`inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium text-white ${
                selectedIndex !== null ? "bg-indigo-600 hover:bg-indigo-700" : "bg-slate-300 cursor-not-allowed"
              }`}
            >
              Valider et suivant
            </button>
          </div>
        </>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 px-3 py-4 text-sm">
          <h2 className="font-semibold text-slate-900 mb-1">Examen terminé</h2>
          <p className="text-slate-600">
            Affiche ici le score global, le seuil de réussite (p. ex. 65%) et un récapitulatif par thème.
          </p>
        </div>
      )}
    </div>
  );
};
