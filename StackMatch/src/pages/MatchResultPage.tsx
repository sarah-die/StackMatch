import { Button } from "@progress/kendo-react-buttons";
import { Card, CardBody, CardTitle } from "@progress/kendo-react-layout";
import { useNavigate, useParams } from "react-router-dom";

const MOCK_MATCH_PERCENTAGE = 78;

const MOCK_CONVERSATION_STARTERS = [
  {
    topic: "React",
    prompt: "You both use React — what patterns are you finding most useful lately?",
  },
  {
    topic: "TypeScript",
    prompt: "How are you handling complex generic types in your current project?",
  },
  { topic: "Learning", prompt: "They're learning Rust — what drew you to systems programming?" },
];

export default function MatchResultPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ textAlign: "center" }}>
        <p style={{ margin: "0 0 4px", color: "var(--color-muted)", fontSize: "14px" }}>
          Match with <strong>{id}</strong>
        </p>
        <span style={{ fontSize: "4rem", fontWeight: 700 }}>{MOCK_MATCH_PERCENTAGE}%</span>
        <p style={{ margin: "4px 0 16px", color: "var(--color-muted)" }}>compatibility</p>
        <div
          style={{
            width: "100%",
            height: "12px",
            background: "#e0e0e0",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${MOCK_MATCH_PERCENTAGE}%`,
              height: "100%",
              background: "var(--color-primary, #aa3bff)",
              borderRadius: "8px",
              transition: "width 0.4s ease",
            }}
          />
        </div>
      </div>

      <h3 style={{ margin: 0 }}>Conversation Starters</h3>
      {MOCK_CONVERSATION_STARTERS.map((starter) => (
        <Card key={starter.topic}>
          <CardBody>
            <CardTitle>{starter.topic}</CardTitle>
            <p style={{ margin: 0, fontSize: "14px", color: "var(--color-muted)" }}>
              {starter.prompt}
            </p>
          </CardBody>
        </Card>
      ))}

      <Button themeColor="primary" size="large" style={{ width: "100%" }}>
        Save Connection
      </Button>
      <Button size="large" style={{ width: "100%" }} onClick={() => navigate("/match")}>
        Scan Another
      </Button>
    </div>
  );
}
