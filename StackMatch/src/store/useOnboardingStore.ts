import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ExperienceLevel } from "../types";

export type TagField = "techStack" | "currentlyLearning";

interface OnboardingState {
  step: number;
  hasCompletedOnboarding: boolean;
  name: string;
  role: string;
  experienceLevel: ExperienceLevel;
  techStack: string[];
  currentlyLearning: string[];
  tagDrafts: Record<TagField, string>;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setName: (name: string) => void;
  setRole: (role: string) => void;
  setExperienceLevel: (level: ExperienceLevel) => void;
  setTagDraft: (field: TagField, value: string) => void;
  addTag: (field: TagField, value: string) => void;
  removeTag: (field: TagField, tag: string) => void;
  completeOnboarding: () => void;
}

interface LegacyProfile {
  name?: string;
  role?: string;
  experienceLevel?: ExperienceLevel;
  techStack?: string[];
  currentlyLearning?: string[];
}

const loadLegacyProfile = (): LegacyProfile => {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const stored = window.localStorage.getItem("stackmatch_profile");
    return stored ? (JSON.parse(stored) as LegacyProfile) : {};
  } catch {
    return {};
  }
};

const legacy = loadLegacyProfile();

const INITIAL_STATE = {
  step: 0,
  hasCompletedOnboarding:
    Boolean(legacy.name) ||
    Boolean(legacy.role) ||
    Boolean(legacy.techStack?.length) ||
    Boolean(legacy.currentlyLearning?.length),
  name: legacy.name ?? "",
  role: legacy.role ?? "",
  experienceLevel: legacy.experienceLevel ?? ("intermediate" as ExperienceLevel),
  techStack: legacy.techStack ?? [],
  currentlyLearning: legacy.currentlyLearning ?? [],
  tagDrafts: {
    techStack: "",
    currentlyLearning: "",
  } as Record<TagField, string>,
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set, get) => ({
      ...INITIAL_STATE,
      setStep: (step) => set({ step }),
      nextStep: () => set((state) => ({ step: Math.min(state.step + 1, 2) })),
      prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 0) })),
      setName: (name) => set({ name }),
      setRole: (role) => set({ role }),
      setExperienceLevel: (experienceLevel) => set({ experienceLevel }),
      setTagDraft: (field, value) =>
        set((state) => ({
          tagDrafts: { ...state.tagDrafts, [field]: value },
        })),
      addTag: (field, value) => {
        const trimmed = value.trim();
        if (!trimmed) {
          return;
        }

        const tags = get()[field];
        if (tags.includes(trimmed)) {
          set((state) => ({
            tagDrafts: { ...state.tagDrafts, [field]: "" },
          }));
          return;
        }

        set((state) => ({
          [field]: [...state[field], trimmed],
          tagDrafts: { ...state.tagDrafts, [field]: "" },
        }));
      },
      removeTag: (field, tag) =>
        set((state) => ({
          [field]: state[field].filter((entry) => entry !== tag),
        })),
      completeOnboarding: () => set({ hasCompletedOnboarding: true, step: 0 }),
    }),
    {
      name: "stackmatch-onboarding-store",
    },
  ),
);
