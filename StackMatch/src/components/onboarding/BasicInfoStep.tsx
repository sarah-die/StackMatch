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

const getNameHint = (value: string) => {
  const trimmed = value.trim();

  if (!trimmed) {
    return "This is how your matches will see you.";
  }

  if (trimmed.length < 3) {
    return "Try adding your full first and last name.";
  }

  return "Looks great.";
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
    <div className="basic-info-step">
      <div className="basic-info-step__header">
        <h2 style={LABEL_STYLE}>Tell us about you</h2>
        <p style={SUBTITLE_STYLE}>A polished profile helps create better matches.</p>
      </div>

      <div className="basic-info-step__section">
        <div className="basic-info-step__section-title-row">
          <h2 style={LABEL_STYLE}>Name</h2>
          <span className="basic-info-step__micro-hint">Public</span>
        </div>
        <Input
          value={name}
          onChange={(e) => setName(String(e.value ?? ""))}
          placeholder="Your full name"
          style={{ width: "100%" }}
        />
        <p className="basic-info-step__helper">{getNameHint(name)}</p>
      </div>

      <div className="basic-info-step__section">
        <div className="basic-info-step__section-title-row">
          <h2 style={LABEL_STYLE}>Role</h2>
          <span className="basic-info-step__micro-hint">Required</span>
        </div>
        <p style={SUBTITLE_STYLE}>Enter the role that best describes what you do.</p>
        <Input
          value={role}
          onChange={(e) => setRole(String(e.value ?? ""))}
          placeholder="e.g. Frontend Engineer, DevOps, Data Scientist"
          style={{ width: "100%" }}
        />
      </div>

      <div className="basic-info-step__section">
        <div className="basic-info-step__section-title-row">
          <h2 style={LABEL_STYLE}>Experience Level</h2>
          <span className="basic-info-step__micro-hint">Required</span>
        </div>
        <p style={SUBTITLE_STYLE}>Choose the level that best matches your current experience.</p>
        <div className="basic-info-step__radio-frame">
          <RadioGroup
            className="experience-radio-grid"
            data={EXPERIENCE_OPTIONS}
            value={experienceLevel}
            onChange={(e: RadioGroupChangeEvent) => setExperienceLevel(e.value as ExperienceLevel)}
          />
        </div>
      </div>

      <div className="basic-info-step__section">
        <div className="basic-info-step__section-title-row">
          <h2 style={LABEL_STYLE}>LinkedIn URL</h2>
          <span className="basic-info-step__micro-hint">Optional</span>
        </div>
        <p style={SUBTITLE_STYLE}>Add your profile link so matches can connect with you.</p>
        <Input
          value={linkedInUrl}
          onChange={(e) => setLinkedInUrl(String(e.value ?? ""))}
          placeholder="www.linkedin.com/in/your-profile"
          style={{ width: "100%" }}
        />
        <p className="basic-info-step__helper">
          {linkedInUrl.trim()
            ? "Nice. This helps people verify your background quickly."
            : "Share your profile to build trust faster."}
        </p>
      </div>
    </div>
  );
};
