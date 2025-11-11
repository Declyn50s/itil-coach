import React from "react";
import { useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";

export const ExamSetupPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-base sm:text-lg flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600" />
            Examen blanc
          </h1>
          <p className="text-xs text-slate-500">
            Simule les conditions de l'examen officiel ITIL.
          </p>
        </div>
      </div>

      <section className="bg-white rounded-xl border border-slate-200">
        <div className="px-3 py-4 space-y-3 text-xs sm:text-sm">
          <div className="space-y-1">
            <p className="font-medium text-slate-800">Paramètres par défaut :</p>
            <ul className="list-disc list-inside text-slate-600 space-y-0.5">
              <li>40 questions</li>
              <li>Durée : 60 minutes</li>
              <li>Score de réussite : 65%</li>
              <li>Pas de correction avant la fin</li>
            </ul>
          </div>

          <div className="space-y-1">
            <p className="font-medium text-slate-800">Prochaine échéance</p>
            <p className="text-slate-600">
              Tu as prévu ton examen dans{" "}
              <span className="font-semibold">23 jours</span>. L'objectif
              recommandé est de faire{" "}
              <span className="font-semibold">au moins 5 examens blancs</span>.
            </p>
          </div>

          <button
            onClick={() => navigate("/exam/run")}
            className="w-full inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white text-xs py-1.5 font-semibold hover:bg-indigo-700 mt-1"
          >
            Lancer un examen blanc complet
          </button>
        </div>
      </section>
    </div>
  );
};
