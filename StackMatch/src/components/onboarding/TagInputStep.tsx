import { Button, Chip } from "@progress/kendo-react-buttons";
import { Input } from "@progress/kendo-react-inputs";
import { useOnboardingStore, type TagField } from "../../store/useOnboardingStore";

interface TagInputStepProps {
  title: string;
  description: string;
  field: TagField;
  suggestions: string[];
}

export default function TagInputStep({
  title,
  description,
  field,
  suggestions,
}: TagInputStepProps) {
  const tags = useOnboardingStore((state) => state[field]);
  const inputValue = useOnboardingStore((state) => state.tagDrafts[field]);
  const setTagDraft = useOnboardingStore((state) => state.setTagDraft);
  const addTag = useOnboardingStore((state) => state.addTag);
  const removeTag = useOnboardingStore((state) => state.removeTag);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag(field, inputValue);
    }
  }

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: "8px" }}>{title}</h2>
        <p style={{ color: "var(--color-muted, #6b7280)", fontSize: "14px" }}>{description}</p>
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
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

      {tags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {tags.map((tag) => (
            <Chip key={tag} text={tag} removable onRemove={() => removeTag(field, tag)} />
          ))}
        </div>
      )}

      <div>
        <p
          style={{
            fontSize: "13px",
            color: "var(--color-muted, #6b7280)",
            marginBottom: "10px",
            fontWeight: 500,
          }}
        >
          Suggestions
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
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
}
