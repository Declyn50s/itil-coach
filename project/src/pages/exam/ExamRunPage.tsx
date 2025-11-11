import React from "react";

export const ExamRunPage: React.FC = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-semibold text-base sm:text-lg">
        Examen blanc (maquette)
      </h1>
      <p className="text-xs text-slate-600">
        Ici tu implémenteras la version stricte de l'examen : timer, navigation,
        et affichage du résultat uniquement à la fin. Tu peux réutiliser le
        même pattern que pour le test mais en désactivant le feedback par
        question.
      </p>
    </div>
  );
};
