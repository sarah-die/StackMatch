import { Button } from "@progress/kendo-react-buttons";
import { Card, CardBody, CardSubtitle, CardTitle } from "@progress/kendo-react-layout";
import { useNavigate } from "react-router-dom";

const MOCK_PROFILE = {
  name: "Sarah Dev",
  role: "Frontend Engineer",
  experienceLevel: "Senior",
  techStack: ["React", "TypeScript", "Tailwind", "Node.js"],
  currentlyLearning: ["Rust", "WebAssembly"],
  bio: "Building fast UIs and exploring systems programming on weekends.",
};

export default function ProfilePage() {
  const navigate = useNavigate();

  function handleReset() {
    localStorage.removeItem("stackmatch_profile");
    navigate("/onboarding");
  }

  return (
    <div style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>My Profile</h2>
        <Button size="small" onClick={handleReset}>
          Reset
        </Button>
      </div>

      <Card>
        <CardBody>
          <CardTitle>{MOCK_PROFILE.name}</CardTitle>
          <CardSubtitle>
            {MOCK_PROFILE.role} · {MOCK_PROFILE.experienceLevel}
          </CardSubtitle>
          <p
            style={{
              marginTop: "12px",
              marginBottom: 0,
              fontSize: "14px",
              color: "var(--color-muted)",
            }}
          >
            {MOCK_PROFILE.bio}
          </p>
        </CardBody>
      </Card>

      <div>
        <h3 style={{ marginBottom: "12px" }}>Tech Stack</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {MOCK_PROFILE.techStack.map((tech) => (
            <span
              key={tech}
              style={{
                background: "#f0f0f0",
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
          {MOCK_PROFILE.currentlyLearning.map((item) => (
            <span
              key={item}
              style={{
                background: "#e8f4fd",
                borderRadius: "6px",
                padding: "4px 12px",
                fontSize: "14px",
                color: "#0078d4",
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
}
