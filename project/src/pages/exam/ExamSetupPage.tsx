import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Theme } from "@/types/question";
import { THEME_OPTIONS } from "@/constants/themes";

export const ExamSetupPage: React.FC = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<Theme | "">("");
  const [questionsCount, setQuestionsCount] = useState(40);

  return (
    <div className="space-y-3">
      <div>
        <h1 className="font-semibold text-base sm:text-lg">Mode Examen</h1>
        <p className="text-xs text-slate-500">Examen blanc sans feedback, score à la fin.</p>
      </div>

      <section className="bg-white rounded-xl border border-slate-200">
        <div className="px-3 py-4 space-y-4 text-xs sm:text-sm">
          <div className="grid sm:grid-cols-3 gap-2">
            <div className="col-span-2 space-y-1">
              <label className="text-[11px] font-medium text-slate-600">Thème</label>
              <select
                className="w-full border border-slate-200 rounded-lg px-2 py-1.5 text-xs bg-white"
                value={theme}
                onChange={(e) => setTheme((e.target.value || "") as Theme | "")}
              >
                <option value="">Tous les thèmes</option>
                {THEME_OPTIONS.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-medium text-slate-600">Nombre de questions</label>
              <select
                className="w-full border border-slate-200 rounded-lg px-2 py-1.5 text-xs bg-white"
                value={questionsCount}
                onChange={(e) => setQuestionsCount(Number(e.target.value))}
              >
                <option value={20}>20</option>
                <option value={40}>40</option>
                <option value={60}>60</option>
              </select>
            </div>
          </div>

          <button
            onClick={() =>
              navigate("/exam/run", {
                state: { theme: theme || undefined, questionsCount },
              })
            }
            className="w-full mt-1 inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white text-xs py-1.5 font-semibold hover:bg-indigo-700"
          >
            Démarrer l’examen
          </button>
        </div>
      </section>
    </div>
  );
};
