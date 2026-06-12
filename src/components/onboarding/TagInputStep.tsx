import { Button, Chip } from "@progress/kendo-react-buttons";
import { Input } from "@progress/kendo-react-inputs";
import { useOnboardingStore, type TagField } from "../../store/useOnboardingStore";

interface TagInputStepProps {
  title: string;
  description: string;
  field: TagField;
  suggestions: string[];
}

const getDraftHint = (value: string) => {
  if (!value.trim()) {
    return "Try adding short, specific phrases.";
  }

  return "Press Enter or click Add to save this tag.";
};

export const TagInputStep = ({ title, description, field, suggestions }: TagInputStepProps) => {
  const tags = useOnboardingStore((state) => state[field]);
  const inputValue = useOnboardingStore((state) => state.tagDrafts[field]);
  const setTagDraft = useOnboardingStore((state) => state.setTagDraft);
  const addTag = useOnboardingStore((state) => state.addTag);
  const removeTag = useOnboardingStore((state) => state.removeTag);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag(field, inputValue);
    }
  };

  return (
    <div className="tag-input-step">
      <div className="tag-input-step__header">
        <h2 style={{ marginBottom: "8px" }}>{title}</h2>
        <p style={{ color: "var(--color-muted, #6b7280)", fontSize: "14px" }}>{description}</p>
      </div>

      <div className="tag-input-step__section">
        <div className="tag-input-step__section-title-row">
          <h2 style={{ marginBottom: "8px" }}>Add tags</h2>
          <span className="basic-info-step__micro-hint">{tags.length} added</span>
        </div>
        <div className="tag-input-step__input-row">
          <Input
            value={inputValue}
            onChange={(e) => setTagDraft(field, String(e.value ?? ""))}
            onKeyDown={handleKeyDown}
            placeholder="Type and press Enter to add..."
            style={{ flex: 1 }}
          />
          <Button onClick={() => addTag(field, inputValue)} disabled={!inputValue.trim()}>
            Add
          </Button>
        </div>
        <p className="basic-info-step__helper">{getDraftHint(inputValue)}</p>
      </div>

      <div className="tag-input-step__section">
        <div className="tag-input-step__section-title-row">
          <h2 style={{ marginBottom: "8px" }}>Your tags</h2>
        </div>

        {tags.length > 0 ? (
          <div className="tag-input-step__chip-grid">
            {tags.map((tag) => (
              <Chip key={tag} text={tag} removable onRemove={() => removeTag(field, tag)} />
            ))}
          </div>
        ) : (
          <div className="tag-input-step__empty-state">
            Add your first tag to start shaping your profile highlights.
          </div>
        )}
      </div>

      <div className="tag-input-step__section">
        <div className="tag-input-step__section-title-row">
          <h2 style={{ marginBottom: "8px" }}>Suggestions</h2>
          <span className="basic-info-step__micro-hint">Tap to add</span>
        </div>
        <p style={{ color: "var(--color-muted, #6b7280)", fontSize: "13px", marginBottom: "2px" }}>
          Pick a few to speed up onboarding.
        </p>
        <div className="tag-input-step__suggestion-frame">
          {suggestions.map((s) => (
            <Chip
              key={s}
              text={s}
              selected={tags.includes(s)}
              onClick={() => {
                if (!tags.includes(s)) {
                  addTag(field, s);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
