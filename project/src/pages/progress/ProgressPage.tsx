import React from "react";
import { BarChart2 } from "lucide-react";
import { useUserStore } from "@/store/userStore";
import { ProgressBarRow } from "@/components/charts/ProgressBarRow";

export const ProgressPage: React.FC = () => {
  const stats = useUserStore((s) => s.stats);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-base sm:text-lg flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-indigo-600" />
            Progression
          </h1>
          <p className="text-xs text-slate-500">
            Visualise ton niveau global et par thème.
          </p>
        </div>
      </div>

      <section className="bg-white rounded-xl border border-slate-200">
        <div className="px-3 py-4 text-xs sm:text-sm space-y-3">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-slate-500 text-[11px]">
                Niveau estimé global
              </p>
              <p className="text-2xl font-semibold text-slate-900">
                {stats.successRateGlobal}%
              </p>
            </div>
            <div className="w-32 h-32 rounded-full border-4 border-indigo-100 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-indigo-50 flex items-center justify-center">
                <span className="text-xs text-indigo-700 text-center px-2">
                  Continue, tu avances dans la bonne direction
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <ProgressBarRow
              label="Concepts clés"
              value={stats.successByTheme["concepts"] ?? 0}
            />
            <ProgressBarRow
              label="Pratiques ITIL"
              value={stats.successByTheme["practices"] ?? 0}
            />
            <ProgressBarRow
              label="Dimensions & SVS"
              value={stats.successByTheme["dimensions"] ?? 0}
            />
          </div>

          <div className="border-t pt-3 mt-1 flex flex-wrap gap-3 text-[11px] text-slate-600">
            <div>
              Questions répondues :{" "}
              <span className="font-semibold">
                {stats.totalQuestionsAnswered}
              </span>
            </div>
            <div>
              Sessions réalisées :{" "}
              <span className="font-semibold">{stats.totalSessions}</span>
            </div>
            <div>
              Examens blancs :{" "}
              <span className="font-semibold">{stats.totalExams}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
