export type ExperienceLevel = "Beginner" | "Intermediate" | "Senior" | "Expert";

export interface UserProfile {
  id: string;
  name: string;
  role: string;
  experienceLevel: ExperienceLevel;
  techStack: string[];
  currentlyLearning: string[];
  bio?: string;
}

export interface ConversationStarter {
  topic: string;
  prompt: string;
}

export interface Match {
  id: string;
  profile: UserProfile;
  matchPercentage: number;
  sharedStack: string[];
  conversationStarters: ConversationStarter[];
  matchedAt: string; // ISO date string
}
