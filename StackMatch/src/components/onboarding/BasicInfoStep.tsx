import { Input, RadioGroup, type RadioGroupChangeEvent } from "@progress/kendo-react-inputs";
import { useOnboardingStore } from "../../store/useOnboardingStore";
import type { ExperienceLevel } from "../../types";

const EXPERIENCE_OPTIONS = [
  { label: "Beginner", value: "Beginner" },
  { label: "Intermediate", value: "Intermediate" },
  { label: "Senior", value: "Senior" },
  { label: "Expert", value: "Expert" },
];

const LABEL_STYLE = { marginBottom: "8px" };
const SUBTITLE_STYLE = {
  color: "var(--color-muted, #6b7280)",
  fontSize: "14px",
  marginBottom: "15px",
};

export const BasicInfoStep = () => {
  const name = useOnboardingStore((state) => state.name);
  const setName = useOnboardingStore((state) => state.setName);
  const role = useOnboardingStore((state) => state.role);
  const setRole = useOnboardingStore((state) => state.setRole);
  const linkedInUrl = useOnboardingStore((state) => state.linkedInUrl);
  const setLinkedInUrl = useOnboardingStore((state) => state.setLinkedInUrl);
  const experienceLevel = useOnboardingStore((state) => state.experienceLevel);
  const setExperienceLevel = useOnboardingStore((state) => state.setExperienceLevel);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "30px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <h2 style={LABEL_STYLE}>Name</h2>
        <Input
          value={name}
          onChange={(e) => setName(String(e.value ?? ""))}
          placeholder="Your full name"
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2 style={LABEL_STYLE}>Role</h2>
        <p style={SUBTITLE_STYLE}>Enter the role that best describes what you do.</p>
        <Input
          value={role}
          onChange={(e) => setRole(String(e.value ?? ""))}
          placeholder="e.g. Frontend Engineer, DevOps, Data Scientist"
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2 style={LABEL_STYLE}>Experience Level</h2>
        <p style={SUBTITLE_STYLE}>Choose the level that best matches your current experience.</p>
        <RadioGroup
          className="experience-radio-grid"
          data={EXPERIENCE_OPTIONS}
          value={experienceLevel}
          onChange={(e: RadioGroupChangeEvent) => setExperienceLevel(e.value as ExperienceLevel)}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2 style={LABEL_STYLE}>LinkedIn URL</h2>
        <p style={SUBTITLE_STYLE}>Add your profile link so matches can connect with you.</p>
        <Input
          value={linkedInUrl}
          onChange={(e) => setLinkedInUrl(String(e.value ?? ""))}
          placeholder="www.linkedin.com/in/your-profile"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};
