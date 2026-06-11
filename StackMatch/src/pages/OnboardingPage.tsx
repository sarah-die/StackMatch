import { Button } from "@progress/kendo-react-buttons";
import { Stepper, type StepperChangeEvent } from "@progress/kendo-react-layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const STEPS = [{ label: "Basic Info" }, { label: "Tech Stack" }, { label: "Learning Goals" }];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  function handleStepChange(e: StepperChangeEvent) {
    setStep(e.value);
  }

  function handleFinish() {
    // Placeholder: in future, save profile to localStorage
    localStorage.setItem("stackmatch_profile", "true");
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
          <div style={{ textAlign: "center" }}>
            <h2>Basic Info</h2>
            <p style={{ color: "var(--color-muted)" }}>Name, role, and experience level go here.</p>
          </div>
        )}
        {step === 1 && (
          <div style={{ textAlign: "center" }}>
            <h2>Your Tech Stack</h2>
            <p style={{ color: "var(--color-muted)" }}>
              Select the technologies you work with daily.
            </p>
          </div>
        )}
        {step === 2 && (
          <div style={{ textAlign: "center" }}>
            <h2>Learning Goals</h2>
            <p style={{ color: "var(--color-muted)" }}>
              What are you currently learning or exploring?
            </p>
          </div>
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
