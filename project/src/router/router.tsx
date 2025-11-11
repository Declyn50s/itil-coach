import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "@/pages/home/HomePage";
import { LearnPage } from "@/pages/learn/LearnPage";
import { TestSetupPage } from "@/pages/test/TestSetupPage";
import { TestRunPage } from "@/pages/test/TestRunPage";
import { ExamSetupPage } from "@/pages/exam/ExamSetupPage";
import { ExamRunPage } from "@/pages/exam/ExamRunPage";
import { FavoritesPage } from "@/pages/favorites/FavoritesPage";
import { ProgressPage } from "@/pages/progress/ProgressPage";
import { ProfilePage } from "@/pages/profile/ProfilePage";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/learn" element={<LearnPage />} />
      <Route path="/test/setup" element={<TestSetupPage />} />
      <Route path="/test/run" element={<TestRunPage />} />
      <Route path="/exam/setup" element={<ExamSetupPage />} />
      <Route path="/exam/run" element={<ExamRunPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
