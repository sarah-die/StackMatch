import { Input, RadioGroup, type RadioGroupChangeEvent } from "@progress/kendo-react-inputs";
import type { ExperienceLevel } from "../../types";

interface BasicInfoStepProps {
  name: string;
  setName: (v: string) => void;
  role: string;
  setRole: (v: string) => void;
  experienceLevel: ExperienceLevel;
  setExperienceLevel: (v: ExperienceLevel) => void;
}

const EXPERIENCE_OPTIONS = [
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Senior", value: "senior" },
  { label: "Expert", value: "expert" },
];

export default function BasicInfoStep({
  name,
  setName,
  role,
  setRole,
  experienceLevel,
  setExperienceLevel,
}: BasicInfoStepProps) {
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
