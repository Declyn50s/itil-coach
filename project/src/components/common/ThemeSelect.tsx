import React from "react";
import type { Theme } from "@/types/question";
import { THEME_OPTIONS } from "@/constants/themes";

type Props = {
  value: Theme | "";
  onChange: (v: Theme | "") => void;
  includeAllOption?: boolean;     // affiche "Tous les thèmes"
  className?: string;
  label?: string;                 // libellé au-dessus
};

export const ThemeSelect: React.FC<Props> = ({
  value,
  onChange,
  includeAllOption = true,
  className = "w-full border border-slate-200 rounded-lg px-2 py-1.5 text-xs bg-white",
  label
}) => {
  return (
    <div className="space-y-1">
      {label && <label className="text-[11px] font-medium text-slate-600">{label}</label>}
      <select
        className={className}
        value={value}
        onChange={(e) => onChange((e.target.value || "") as Theme | "")}
      >
        {includeAllOption && <option value="">Tous les thèmes</option>}
        {THEME_OPTIONS.map((t) => (
          <option key={t.value} value={t.value}>
            {t.label}
          </option>
        ))}
      </select>
    </div>
  );
};
