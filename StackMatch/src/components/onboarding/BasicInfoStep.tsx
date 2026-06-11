import { Input, RadioGroup, type RadioGroupChangeEvent } from "@progress/kendo-react-inputs";
import { useOnboardingStore } from "../../store/useOnboardingStore";
import type { ExperienceLevel } from "../../types";

const EXPERIENCE_OPTIONS = [
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Senior", value: "senior" },
  { label: "Expert", value: "expert" },
];

export default function BasicInfoStep() {
  const name = useOnboardingStore((state) => state.name);
  const setName = useOnboardingStore((state) => state.setName);
  const role = useOnboardingStore((state) => state.role);
  const setRole = useOnboardingStore((state) => state.setRole);
  const experienceLevel = useOnboardingStore((state) => state.experienceLevel);
  const setExperienceLevel = useOnboardingStore((state) => state.setExperienceLevel);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <label style={{ fontWeight: 500, fontSize: "14px" }}>Name</label>
        <Input
          value={name}
          onChange={(e) => setName(String(e.value ?? ""))}
          placeholder="Your full name"
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <label style={{ fontWeight: 500, fontSize: "14px" }}>Role</label>
        <Input
          value={role}
          onChange={(e) => setRole(String(e.value ?? ""))}
          placeholder="e.g. Frontend Engineer, DevOps, Data Scientist"
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label style={{ fontWeight: 500, fontSize: "14px" }}>Experience Level</label>
        <RadioGroup
          data={EXPERIENCE_OPTIONS}
          value={experienceLevel}
          onChange={(e: RadioGroupChangeEvent) => setExperienceLevel(e.value as ExperienceLevel)}
        />
      </div>
    </div>
  );
}
