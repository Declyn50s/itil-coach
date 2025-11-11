import React from "react";
import { BookOpen, PlayCircle, Clock, Star } from "lucide-react";
import type { SessionType } from "@/types/session";

type Props = {
  type: SessionType;
  currentIndex: number;
  total: number;
};

const typeConfig: Record<
  SessionType,
  { icon: React.ComponentType<{ className?: string }>; label: string }
> = {
  learn: { icon: BookOpen, label: "Mode Apprentissage" },
  test: { icon: PlayCircle, label: "Mode Test" },
  exam: { icon: Clock, label: "Examen blanc" },
  favorites: { icon: Star, label: "Favoris" }
};

export const SessionHeader: React.FC<Props> = ({
  type,
  currentIndex,
  total
}) => {
  const Icon = typeConfig[type].icon;
  const label = typeConfig[type].label;

  return (
    <div className="flex items-center justify-between mb-2">
      <div>
        <h1 className="font-semibold text-base sm:text-lg flex items-center gap-2">
          <Icon className="w-5 h-5 text-indigo-600" />
          {label}
        </h1>
        <p className="text-xs text-slate-500">
          Questions expliquées, feedback immédiat. Idéal pour ancrer les
          concepts.
        </p>
      </div>
      <div className="text-right text-xs text-slate-500">
        Question{" "}
        <span className="font-semibold">{Math.min(currentIndex + 1, total)}</span>/
        {total}
      </div>
    </div>
  );
};
