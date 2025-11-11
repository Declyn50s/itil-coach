import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuestionsStore } from "@/store/questionsStore";
import { useSessionStore } from "@/store/sessionStore";
import { SessionHeader } from "@/components/session/SessionHeader";
import { SessionFooter } from "@/components/session/SessionFooter";
import { QuestionCard } from "@/components/question/QuestionCard";

export const TestRunPage: React.FC = () => {
  const location = useLocation();
  const { questionsCount = 20 } = (location.state || {}) as {
    questionsCount?: number;
  };

  const getRandomQuestions = useQuestionsStore((s) => s.getRandomQuestions);
  const { currentSession, startSession, answerCurrent, goNext } =
    useSessionStore();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (!currentSession) {
      const q = getRandomQuestions(questionsCount);
      startSession("test", q);
    }
  }, [currentSession, getRandomQuestions, questionsCount, startSession]);

  if (!currentSession) return null;

  const question = currentSession.questions[currentSession.currentIndex];

  const handleValidate = () => {
    if (selectedIndex === null) return;
    answerCurrent(selectedIndex);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelectedIndex(null);
    goNext();
  };

  return (
    <div className="space-y-3">
      <SessionHeader
        type="test"
        currentIndex={currentSession.currentIndex}
        total={currentSession.questions.length}
      />
      <QuestionCard
        question={question}
        selectedIndex={selectedIndex}
        showFeedback={showFeedback}
        onSelect={(index) => setSelectedIndex(index)}
      />
      <SessionFooter
        canValidate={selectedIndex !== null}
        showFeedback={showFeedback}
        onValidate={handleValidate}
        onNext={handleNext}
        label="Test rapide · correction après chaque question"
      />
    </div>
  );
};
