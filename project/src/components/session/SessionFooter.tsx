import React from "react";
import { Clock, CheckCircle2 } from "lucide-react";

type Props = {
  canValidate: boolean;
  showFeedback: boolean;
  onValidate: () => void;
  onNext: () => void;
  label?: string;
};

export const SessionFooter: React.FC<Props> = ({
  canValidate,
  showFeedback,
  onValidate,
  onNext,
  label
}) => {
  return (
    <div className="flex justify_between items-center pt-2">
      {!showFeedback ? (
        <button
          disabled={!canValidate}
          onClick={onValidate}
          className={`inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium text-white ${
            canValidate
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-slate-300 cursor-not-allowed"
          }`}
        >
          <CheckCircle2 className="w-4 h-4 mr-1" />
          Valider la réponse
        </button>
      ) : (
        <button
          onClick={onNext}
          className="inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium border border-slate-200 text-slate-800 hover:bg-slate-50"
        >
          Question suivante
        </button>
      )}

      <div className="text-[11px] text-slate-500 flex items-center gap-1">
        <Clock className="w-3 h-3" />
        {label ?? "Session guidée · 10 questions"}
      </div>
    </div>
  );
};
