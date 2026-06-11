import { Button } from "@progress/kendo-react-buttons";
import { Stepper, type StepperChangeEvent } from "@progress/kendo-react-layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ExperienceLevel } from "../types";
import BasicInfoStep from "../components/onboarding/BasicInfoStep";
import TagInputStep from "../components/onboarding/TagInputStep";

const STEPS = [{ label: "Basic Info" }, { label: "Tech Stack" }, { label: "Learning Goals" }];

const TECH_STACK_SUGGESTIONS = [
  "React",
  "TypeScript",
  "Vue.js",
  "Angular",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
  "GraphQL",
  "Docker",
  "PostgreSQL",
];

const LEARNING_SUGGESTIONS = [
  "Rust",
  "WebAssembly",
  "AI/ML",
  "Svelte",
  "Go",
  "Kubernetes",
  "Deno",
  "Three.js",
  "Web3",
  "Bun",
];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>("intermediate");
  const [techStack, setTechStack] = useState<string[]>([]);
  const [currentlyLearning, setCurrentlyLearning] = useState<string[]>([]);

  function handleStepChange(e: StepperChangeEvent) {
    setStep(e.value);
  }

  function handleFinish() {
    const profile = { name, role, experienceLevel, techStack, currentlyLearning };
    localStorage.setItem("stackmatch_profile", JSON.stringify(profile));
    navigate("/home");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        padding: "24px 16px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "32px" }}>Welcome to StackMatch</h1>

      <Stepper value={step} onChange={handleStepChange} items={STEPS} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          marginTop: "32px",
        }}
      >
        {step === 0 && (
          <BasicInfoStep
            name={name}
            setName={setName}
            role={role}
            setRole={setRole}
            experienceLevel={experienceLevel}
            setExperienceLevel={setExperienceLevel}
          />
        )}
        {step === 1 && (
          <TagInputStep
            title="Your Tech Stack"
            description="Select the technologies you work with daily."
            tags={techStack}
            setTags={setTechStack}
            suggestions={TECH_STACK_SUGGESTIONS}
          />
        )}
        {step === 2 && (
          <TagInputStep
            title="Learning Goals"
            description="What are you currently learning or exploring?"
            tags={currentlyLearning}
            setTags={setCurrentlyLearning}
            suggestions={LEARNING_SUGGESTIONS}
          />
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "32px" }}>
        <Button disabled={step === 0} onClick={() => setStep((s) => s - 1)}>
          Back
        </Button>
        {step < STEPS.length - 1 ? (
          <Button themeColor="primary" onClick={() => setStep((s) => s + 1)}>
            Next
          </Button>
        ) : (
          <Button themeColor="primary" onClick={handleFinish}>
            Get Started
          </Button>
        )}
      </div>
    </div>
  );
}
