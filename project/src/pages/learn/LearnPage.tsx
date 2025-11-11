import React, { useState, useEffect } from "react";
import { useQuestionsStore } from "@/store/questionsStore";
import { useSessionStore } from "@/store/sessionStore";
import { SessionHeader } from "@/components/session/SessionHeader";
import { SessionFooter } from "@/components/session/SessionFooter";
import { QuestionCard } from "@/components/question/QuestionCard";

export const LearnPage: React.FC = () => {
  const getRandomQuestions = useQuestionsStore((s) => s.getRandomQuestions);
  const { currentSession, startSession, answerCurrent, goNext } =
    useSessionStore();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (!currentSession) {
      const q = getRandomQuestions(10);
      startSession("learn", q);
    }
  }, [currentSession, getRandomQuestions, startSession]);

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
        type="learn"
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
      />
    </div>
  );
};
