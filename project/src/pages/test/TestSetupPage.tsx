import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlayCircle, Clock } from "lucide-react";
import type { Theme } from "@/types/question";
import { THEME_OPTIONS } from "@/constants/themes"; // source unique des thèmes

export const TestSetupPage: React.FC = () => {
  const navigate = useNavigate();
  const [questionsCount, setQuestionsCount] = useState(20);
  const [withTimer, setWithTimer] = useState(true);
  const [theme, setTheme] = useState<Theme | "">("");

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-base sm:text-lg flex items-center gap-2">
            <PlayCircle className="w-5 h-5 text-indigo-600" />
            Mode Test
          </h1>
          <p className="text-xs text-slate-500">
            Simule un mini examen avec score et correction à la fin.
          </p>
        </div>
      </div>

      <section className="bg-white rounded-xl border border-slate-200">
        <div className="px-3 py-4 space-y-4 text-xs sm:text-sm">
          <div className="grid sm:grid-cols-3 gap-2">
            <div className="col-span-2 space-y-1">
              <label className="text-[11px] font-medium text-slate-600">Thème principal</label>
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
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={40}>40</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 pt-1">
            <label className="flex items-center gap-2 text-[11px] text-slate-600">
              <input
                type="checkbox"
                checked={withTimer}
                onChange={(e) => setWithTimer(e.target.checked)}
                className="rounded border-slate-300"
              />
              <span>Activer le timer global</span>
            </label>
            <div className="flex items-center gap-1 text-[11px] text-slate-500">
              <Clock className="w-3 h-3" />
              Durée suggérée : {questionsCount <= 20 ? "25 min" : "45–60 min"}
            </div>
          </div>

          <button
            onClick={() =>
              navigate("/test/run", {
                state: { questionsCount, withTimer, theme: theme || undefined },
              })
            }
            className="w-full mt-1 inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white text-xs py-1.5 font-semibold hover:bg-indigo-700"
          >
            Démarrer le test
          </button>
        </div>
      </section>
    </div>
  );
};
