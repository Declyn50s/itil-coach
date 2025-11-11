import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, Star, Clock, BarChart2 } from "lucide-react";

type Props = {
  currentPath: string;
};

type Item = {
  label: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
};

const items: Item[] = [
  { label: "Accueil", path: "/", icon: Home },
  { label: "Favoris", path: "/favorites", icon: Star },
  { label: "Examen", path: "/exam/setup", icon: Clock },
  { label: "Stats", path: "/progress", icon: BarChart2 }
];

export const BottomNav: React.FC<Props> = ({ currentPath }) => {
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 inset-x-0 border-t bg-white/95 backdrop-blur sm:hidden z-20">
      <div className="max-w-5xl mx-auto flex justify-around py-1 text-xs">
        {items.map((item) => {
          const active =
            currentPath === item.path ||
            (item.path !== "/" && currentPath.startsWith(item.path));
          const Icon = item.icon;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-colors ${
                active ? "text-indigo-600" : "text-slate-500"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
