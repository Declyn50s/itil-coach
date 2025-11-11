import React from "react";
import { AppShell } from "./layout/AppShell";
import { AppRouter } from "./router/router";

const App: React.FC = () => {
  return (
    <AppShell>
      <AppRouter />
    </AppShell>
  );
};

export default App;
