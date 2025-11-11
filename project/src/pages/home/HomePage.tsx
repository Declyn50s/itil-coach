import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, PlayCircle, Clock, Star, BarChart2 } from "lucide-react";
import { ProgressBarRow } from "@/components/charts/ProgressBarRow";

type TileProps = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  onClick: () => void;
};

const ModeTile: React.FC<TileProps> = ({
  title,
  description,
  icon: Icon,
  badge,
  onClick
}) => (
  <button
    onClick={onClick}
    className="text-left bg-white rounded-xl border border-slate-200 hover:shadow-md transition-shadow cursor-pointer"
  >
    <div className="pt-4 pb-4 px-3 flex items-start gap-3">
      <div className="h-9 w-9 rounded-xl bg-indigo-50 flex items-center justify-center">
        <Icon className="w-5 h-5 text-indigo-600" />
      </div>
      <div className="space-y-1 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-sm text-slate-900">{title}</h3>
          {badge && (
            <span className="text-[10px] uppercase tracking-wide bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">
              {badge}
            </span>
          )}
        </div>
        <p className="text-xs text-slate-600 leading-snug">{description}</p>
      </div>
    </div>
  </button>
);

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <section className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl shadow-lg border-none">
        <div className="px-4 py-4 space-y-3 sm:flex sm:items-end sm:justify-between sm:space-y-0">
          <div className="space-y-2 max-w-xl">
            <h1 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Révise ITIL 4 Foundation sans te prendre la tête
            </h1>
            <p className="text-sm text-white/90">
              Sessions courtes, examens blancs réalistes, suivi intelligent de ta
              progression. Tout est pensé pour que tu arrives serein le jour J.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap justify-end">
            <button
              onClick={() => navigate("/learn")}
              className="inline-flex items-center text-xs sm:text-sm font-semibold rounded-lg bg-white text-indigo-700 px-3 py-1.5 shadow-sm hover:bg-slate-50"
            >
              <PlayCircle className="w-4 h-4 mr-1" />
              Commencer à réviser
            </button>
            <button
              onClick={() => navigate("/exam/setup")}
              className="inline-flex items-center text-xs sm:text-sm rounded-lg border border-white/40 text-white px-3 py-1.5 hover:bg-white/10"
            >
              <Clock className="w-4 h-4 mr-1" />
              Lancer un examen blanc
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        <ModeTile
          title="Mode Apprentissage"
          description="Questions expliquées, feedback immédiat, idéal pour comprendre les concepts ITIL."
          icon={BookOpen}
          badge="Recommandé"
          onClick={() => navigate("/learn")}
        />
        <ModeTile
          title="Mode Test"
          description="Simule un mini examen, avec score et correction à la fin."
          icon={PlayCircle}
          onClick={() => navigate("/test/setup")}
        />
        <ModeTile
          title="Examen blanc"
          description="Reproduit les conditions de l'examen : timer, nombre de questions, score de réussite."
          icon={Clock}
          onClick={() => navigate("/exam/setup")}
        />
        <ModeTile
          title="Favoris"
          description="Retrouve les questions marquées ⭐ et retravaille tes points faibles."
          icon={Star}
          onClick={() => navigate("/favorites")}
        />
      </section>

      <section className="bg-white rounded-xl border border-slate-200">
        <div className="px-3 py-3 space-y-2">
          <div className="flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-indigo-600" />
            <h2 className="text-sm font-semibold text-slate-900">
              Aperçu de ta progression
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-600">
              Niveau estimé de préparation
            </span>
            <span className="font-semibold text-indigo-600 text-sm">72%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
            <div
              className="h-full bg-indigo-500 rounded-full"
              style={{ width: "72%" }}
            />
          </div>
          <div className="space-y-1 pt-1">
            <ProgressBarRow label="Concepts clés" value={78} />
            <ProgressBarRow label="Pratiques ITIL" value={65} />
            <ProgressBarRow label="Dimensions & SVS" value={80} />
          </div>
        </div>
      </section>
    </div>
  );
};
