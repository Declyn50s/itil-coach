import React from "react";
import { MainHeader } from "./MainHeader";
import { BottomNav } from "./BottomNav";
import { useLocation } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export const AppShell: React.FC<Props> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <MainHeader />
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 pb-24 pt-4">
        {children}
      </main>
      <BottomNav currentPath={location.pathname} />
    </div>
  );
};
