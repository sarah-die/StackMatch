import { Button } from "@progress/kendo-react-buttons";
import { Card, CardBody, CardTitle } from "@progress/kendo-react-layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MOCK_CONVERSATION_STARTERS } from "../constants/match-phrases";

const MOCK_MATCH_PERCENTAGE = 78;

const getMatchPercentageColor = (percentage: number): string => {
  if (percentage < 35) return "var(--kendo-color-tertiary-emphasis)";
  if (percentage < 65) return "var(--kendo-color-tertiary)";
  return "var(--kendo-color-info)";
};

const pickRandomConversationStarters = (count: number) =>
  [...MOCK_CONVERSATION_STARTERS].sort(() => Math.random() - 0.5).slice(0, count);

export const MatchResultPage = () => {
  const navigate = useNavigate();
  const [randomConversationStarters] = useState(() => pickRandomConversationStarters(5));
  const matchPercentageColor = getMatchPercentageColor(MOCK_MATCH_PERCENTAGE);

  return (
    <div style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            margin: "0 0 4px",
            color: "var(--color-muted)",
            fontSize: "14px",
          }}
        >
          Match with <strong>Nemo Grippa</strong>
        </p>
        <span
          style={{
            display: "block",
            fontSize: "4rem",
            fontWeight: 700,
            lineHeight: 1,
            margin: "0 0 8px",
            color: matchPercentageColor,
          }}
        >
          {MOCK_MATCH_PERCENTAGE}%
        </span>
        <p style={{ margin: "4px 0 16px", color: "var(--color-muted)" }}>compatibility</p>
        <div
          style={{
            width: "100%",
            height: "12px",
            background: "var(--kendo-color-base-subtle)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${MOCK_MATCH_PERCENTAGE}%`,
              height: "100%",
              background: matchPercentageColor,
              borderRadius: "8px",
              transition: "width 0.4s ease",
            }}
          />
        </div>
      </div>

      <h3 style={{ margin: 0 }}>Conversation Starters</h3>
      {randomConversationStarters.map((starter) => (
        <Card key={starter.title}>
          <CardBody>
            <CardTitle>{starter.title}</CardTitle>
            <p style={{ margin: 0, fontSize: "14px", color: "var(--color-muted)" }}>
              {starter.subtitle}
            </p>
          </CardBody>
        </Card>
      ))}

      <Button
        themeColor="primary"
        size="large"
        style={{ width: "100%" }}
        onClick={() => navigate("/connections")}
      >
        Save Connection
      </Button>
      <Button size="large" style={{ width: "100%" }} onClick={() => navigate("/match")}>
        Scan Another
      </Button>
    </div>
  );
};
