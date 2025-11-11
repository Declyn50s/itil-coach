import React from "react";
import { Star } from "lucide-react";
import { useQuestionsStore } from "@/store/questionsStore";

export const FavoritesPage: React.FC = () => {
  const { questions, favorites } = useQuestionsStore();

  const favoriteQuestions = questions.filter((q) =>
    favorites.includes(q.id)
  );

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-base sm:text-lg flex items-center gap-2">
            <Star className="w-5 h-5 text-indigo-600" />
            Favoris
          </h1>
          <p className="text-xs text-slate-500">
            Retrouve ici toutes les questions marquées ⭐ et retravaille tes
            points faibles.
          </p>
        </div>
      </div>

      <section className="bg-white rounded-xl border border-slate-200">
        <div className="px-3 py-3 space-y-3 text-xs sm:text-sm">
          <div className="grid sm:grid-cols-3 gap-2">
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-slate-600">
                Thème
              </label>
              <select className="w-full border border-slate-200 rounded-lg px-2 py-1.5 text-xs bg-white">
                <option>Tous les thèmes</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-slate-600">
                Difficulté
              </label>
              <select className="w-full border border-slate-200 rounded-lg px-2 py-1.5 text-xs bg-white">
                <option>Toutes</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-slate-600">
                Tri
              </label>
              <select className="w-full border border-slate-200 rounded-lg px-2 py-1.5 text-xs bg-white">
                <option>Plus souvent ratées</option>
              </select>
            </div>
          </div>

          <button className="w-full inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white text-xs py-1.5 font-semibold hover:bg-indigo-700 mt-1">
            Lancer une session favoris
          </button>
        </div>
      </section>

      <section className="space-y-2">
        {favoriteQuestions.length === 0 && (
          <div className="text-xs text-slate-500 bg-white rounded-xl border border-dashed border-slate-200 px-3 py-3">
            Tu n'as encore marqué aucune question en favori. Pendant tes
            révisions, clique sur ⭐ pour les retrouver ici.
          </div>
        )}

        {favoriteQuestions.map((q) => (
          <div
            key={q.id}
            className="bg-white rounded-xl border border-slate-200 px-3 py-3 text-xs sm:text-sm space-y-1"
          >
            <div className="flex justify-between items-start gap-2">
              <p className="font-medium text-slate-800">{q.text}</p>
              <Star className="w-4 h-4 text-amber-400 fill-amber-300 flex-shrink-0" />
            </div>
            <div className="flex flex-wrap gap-1 text-[10px] text-slate-500">
              <span className="px-2 py-0.5 rounded-full bg-slate-100 capitalize">
                {q.theme}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-slate-100">
                Diff. {q.difficulty}
              </span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
