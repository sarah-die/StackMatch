import { Button } from "@progress/kendo-react-buttons";
import { Stepper, type StepperChangeEvent } from "@progress/kendo-react-layout";
import { useNavigate } from "react-router-dom";
import BasicInfoStep from "../components/onboarding/BasicInfoStep";
import TagInputStep from "../components/onboarding/TagInputStep";
import { useOnboardingStore } from "../store/useOnboardingStore";

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
  const step = useOnboardingStore((state) => state.step);
  const setStep = useOnboardingStore((state) => state.setStep);
  const nextStep = useOnboardingStore((state) => state.nextStep);
  const prevStep = useOnboardingStore((state) => state.prevStep);
  const completeOnboarding = useOnboardingStore((state) => state.completeOnboarding);
  const navigate = useNavigate();

  function handleStepChange(e: StepperChangeEvent) {
    setStep(e.value);
  }

  function handleFinish() {
    completeOnboarding();
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
        {step === 0 && <BasicInfoStep />}
        {step === 1 && (
          <TagInputStep
            title="Your Tech Stack"
            description="Select the technologies you work with daily."
            field="techStack"
            suggestions={TECH_STACK_SUGGESTIONS}
          />
        )}
        {step === 2 && (
          <TagInputStep
            title="Learning Goals"
            description="What are you currently learning or exploring?"
            field="currentlyLearning"
            suggestions={LEARNING_SUGGESTIONS}
          />
        )}
      </div>

      <div style={{ display: "flex", marginTop: "32px" }}>
        {step > 0 && <Button onClick={prevStep}>Back</Button>}
        {step < STEPS.length - 1 ? (
          <Button themeColor="primary" style={{ marginLeft: "auto" }} onClick={nextStep}>
            Next
          </Button>
        ) : (
          <Button themeColor="primary" style={{ marginLeft: "auto" }} onClick={handleFinish}>
            Get Started
          </Button>
        )}
      </div>
    </div>
  );
}
