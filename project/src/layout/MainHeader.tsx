import React from "react";
import { useNavigate } from "react-router-dom";
import { BarChart2, User } from "lucide-react";

export const MainHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-20">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <button
          className="flex items-center gap-2"
          onClick={() => navigate("/")}
        >
          <div className="h-8 w-8 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
            IT
          </div>
          <div className="leading-tight text-left">
            <div className="font-semibold text-sm sm:text-base">ITIL Coach</div>
            <div className="text-xs text-slate-500">
              Prépare ton examen sans te perdre
            </div>
          </div>
        </button>

        <div className="hidden sm:flex items-center gap-2 text-xs">
          <button
            onClick={() => navigate("/progress")}
            className="inline-flex items-center rounded-lg border border-slate-200 px-2 py-1 text-slate-700 hover:bg-slate-50"
          >
            <BarChart2 className="w-3 h-3 mr-1" />
            Progression
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="inline-flex items-center rounded-full border border-slate-200 p-1 hover:bg-slate-50"
          >
            <User className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
