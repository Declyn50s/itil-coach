export interface UserProfile {
  firstName?: string;
  language: "fr" | "en";
  examDate?: string; // ISO
  reminderFrequency: "daily" | "3x-week" | "weekly" | "never";
}

export interface UserStats {
  totalQuestionsAnswered: number;
  totalSessions: number;
  totalExams: number;
  successRateGlobal: number; // 0-100
  successByTheme: Record<string, number>; // "concepts" -> 78 etc.
}
