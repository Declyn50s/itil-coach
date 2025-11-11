import React from "react";

type Props = {
  label: string;
  value: number;
};

export const ProgressBarRow: React.FC<Props> = ({ label, value }) => (
  <div className="space-y-0.5">
    <div className="flex justify-between text-[11px] text-slate-600">
      <span>{label}</span>
      <span className="font-semibold text-slate-900">{value}%</span>
    </div>
    <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
      <div
        className="h-full bg-indigo-500 rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);
