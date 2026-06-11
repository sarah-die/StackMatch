import { Button, Chip } from "@progress/kendo-react-buttons";
import { Input } from "@progress/kendo-react-inputs";
import { useState } from "react";

interface TagInputStepProps {
  title: string;
  description: string;
  tags: string[];
  setTags: (tags: string[]) => void;
  suggestions: string[];
}

export default function TagInputStep({
  title,
  description,
  tags,
  setTags,
  suggestions,
}: TagInputStepProps) {
  const [inputValue, setInputValue] = useState("");

  function addTag(value: string) {
    const trimmed = value.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
    }
    setInputValue("");
  }

  function removeTag(tag: string) {
    setTags(tags.filter((t) => t !== tag));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag(inputValue);
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
          onChange={(e) => setInputValue(String(e.value ?? ""))}
          onKeyDown={handleKeyDown}
          placeholder="Type and press Enter to add..."
          style={{ flex: 1 }}
        />
        <Button onClick={() => addTag(inputValue)} disabled={!inputValue.trim()}>
          Add
        </Button>
      </div>

      {tags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {tags.map((tag) => (
            <Chip key={tag} text={tag} removable onRemove={() => removeTag(tag)} />
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
                  setTags([...tags, s]);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
