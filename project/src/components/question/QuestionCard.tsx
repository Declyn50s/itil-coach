import React from "react";
import { Star } from "lucide-react";
import type { Question } from "@/types/question";
import { useQuestionsStore } from "@/store/questionsStore";

type Props = {
  question: Question;
  selectedIndex: number | null;
  showFeedback: boolean;
  onSelect: (index: number) => void;
};

export const QuestionCard: React.FC<Props> = ({
  question,
  selectedIndex,
  showFeedback,
  onSelect
}) => {
  const toggleFavorite = useQuestionsStore((s) => s.toggleFavorite);
  const isFavorite = useQuestionsStore((s) => s.isFavorite(question.id));

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
      <div className="px-3 py-3 flex items-start justify-between gap-2">
        <div className="space-y-2 flex-1">
          <h2 className="text-sm sm:text-base font-semibold text-slate-900">
            {question.text}
          </h2>
          <div className="flex flex-wrap gap-1 text-[10px] text-slate-500">
            <span className="px-2 py-0.5 rounded-full bg-slate-100">
              ITIL 4 Foundation
            </span>
            <span className="px-2 py-0.5 rounded-full bg-slate-100 capitalize">
              {question.theme}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-slate-100">
              Diff. {question.difficulty}
            </span>
          </div>
        </div>

        <button
          onClick={() => toggleFavorite(question.id)}
          className="p-1 rounded-full border border-slate-200 text-slate-400 hover:text-amber-500 hover:border-amber-300 transition-colors"
          aria-label="Basculer favori"
        >
          <Star
            className={`w-4 h-4 ${
              isFavorite ? "fill-amber-400 text-amber-500" : ""
            }`}
          />
        </button>
      </div>

      <div className="px-3 pb-3 space-y-2">
        {question.options.map((opt, index) => {
          const isSelected = selectedIndex === index;
          let stateClass = "";

          if (showFeedback) {
            if (index === question.correctIndex) {
              stateClass = "border-emerald-500 bg-emerald-50";
            } else if (isSelected && index !== question.correctIndex) {
              stateClass = "border-rose-500 bg-rose-50";
            }
          } else if (isSelected) {
            stateClass = "border-indigo-500 bg-indigo-50";
          }

          return (
            <button
              key={index}
              type="button"
              onClick={() => !showFeedback && onSelect(index)}
              className={`w-full text-left text-xs sm:text-sm border rounded-xl px-3 py-2 transition-colors ${
                stateClass ||
                "border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/50"
              }`}
            >
              <span className="font-medium mr-2 text-slate-400">
                {String.fromCharCode(65 + index)}.
              </span>
              <span>{opt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
