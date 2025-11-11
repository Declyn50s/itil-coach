import React from "react";
import { User } from "lucide-react";
import { useUserStore } from "@/store/userStore";

export const ProfilePage: React.FC = () => {
  const { profile, updateProfile } = useUserStore();

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-base sm:text-lg flex items-center gap-2">
            <User className="w-5 h-5 text-indigo-600" />
            Profil & objectifs
          </h1>
          <p className="text-xs text-slate-500">
            Gère ta langue, ton objectif d'examen et tes préférences.
          </p>
        </div>
      </div>

      <section className="bg-white rounded-xl border border-slate-200">
        <div className="px-3 py-4 text-xs sm:text-sm space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-slate-600">
                Prénom (optionnel)
              </label>
              <input
                className="w-full border border-slate-200 rounded-lg px-2 py-1.5 text-xs bg-white"
                placeholder="Ton prénom"
                defaultValue={profile.firstName}
                onBlur={(e) =>
                  updateProfile({ firstName: e.target.value || undefined })
                }
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-slate-600">
                Langue de révision
              </label>
              <select
                className="w-full border border-slate-200 rounded-lg px-2 py-1.5 text-xs bg-white"
                value={profile.language}
                onChange={(e) =>
                  updateProfile({ language: e.target.value as "fr" | "en" })
                }
              >
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-slate-600">
                Date prévue de l'examen
              </label>
              <input
                type="date"
                className="w-full border border-slate-200 rounded-lg px-2 py-1.5 text-xs bg-white"
                defaultValue={profile.examDate}
                onBlur={(e) =>
                  updateProfile({
                    examDate: e.target.value || undefined
                  })
                }
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-slate-600">
                Rappel de révision
              </label>
              <select
                className="w-full border border-slate-200 rounded-lg px-2 py-1.5 text-xs bg-white"
                value={profile.reminderFrequency}
                onChange={(e) =>
                  updateProfile({
                    reminderFrequency: e.target.value as any
                  })
                }
              >
                <option value="daily">Chaque jour</option>
                <option value="3x-week">3 fois par semaine</option>
                <option value="weekly">Une fois par semaine</option>
                <option value="never">Jamais</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
