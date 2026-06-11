import { Button } from "@progress/kendo-react-buttons";
import { Card, CardBody, CardSubtitle, CardTitle } from "@progress/kendo-react-layout";
import { useNavigate } from "react-router-dom";
import linkedInBug from "../assets/LI-In-Bug.png";
import { useOnboardingStore } from "../store/useOnboardingStore";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const name = useOnboardingStore((state) => state.name);
  const role = useOnboardingStore((state) => state.role);
  const linkedInUrl = useOnboardingStore((state) => state.linkedInUrl);
  const experienceLevel = useOnboardingStore((state) => state.experienceLevel);
  const techStack = useOnboardingStore((state) => state.techStack);
  const currentlyLearning = useOnboardingStore((state) => state.currentlyLearning);

  return (
    <div style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>My Profile</h2>
      </div>

      <Card>
        <CardBody>
          <CardTitle>{name || "—"}</CardTitle>
          <CardSubtitle>
            {role || "—"} · {experienceLevel || "—"}
          </CardSubtitle>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              minWidth: 0,
            }}
          >
            <span
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
              aria-label="LinkedIn"
            >
              <img
                src={linkedInBug}
                alt="LinkedIn"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </span>
            <span
              style={{
                fontSize: "14px",
                color: "var(--color-muted)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {linkedInUrl || "—"}
            </span>
          </div>
        </CardBody>
      </Card>

      <div>
        <h3 style={{ marginBottom: "12px" }}>Tech Stack</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {techStack.map((tech) => (
            <span
              key={tech}
              style={{
                background: "var(--kendo-color-base-subtle)",
                borderRadius: "6px",
                padding: "4px 12px",
                fontSize: "14px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: "12px" }}>Currently Learning</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {currentlyLearning.map((item) => (
            <span
              key={item}
              style={{
                background: "var(--kendo-color-primary-subtle)",
                borderRadius: "6px",
                padding: "4px 12px",
                fontSize: "14px",
                color: "var(--kendo-color-primary)",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <Button
        themeColor="primary"
        size="large"
        style={{ width: "100%" }}
        onClick={() => navigate("/onboarding")}
      >
        Edit Profile
      </Button>
    </div>
  );
};
