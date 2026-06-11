import { Card, CardBody, CardSubtitle, CardTitle } from "@progress/kendo-react-layout";
import type { KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import linkedInBug from "../assets/LI-In-Bug.png";
import { MOCK_CONNECTIONS } from "../constants/connections";

const getMatchPercentageColor = (percentage: number): string => {
  if (percentage < 35) return "var(--kendo-color-tertiary-emphasis)";
  if (percentage < 65) return "var(--kendo-color-tertiary)";
  return "var(--kendo-color-info)";
};

export const ConnectionsPage = () => {
  const navigate = useNavigate();

  const handleOpenMatchResult = (connectionId: string) => {
    navigate(`/connection/${connectionId}`);
  };

  return (
    <div style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <h2 style={{ margin: 0 }}>Connections</h2>
      <p style={{ margin: 0, color: "var(--color-muted)", fontSize: "14px" }}>
        People you've matched with at this event.
      </p>

      {MOCK_CONNECTIONS.map((connection) => (
        <Card
          key={connection.id}
          style={{ width: "100%", position: "relative", cursor: "pointer" }}
          onClick={() => handleOpenMatchResult(connection.id)}
          role="button"
          tabIndex={0}
          onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              handleOpenMatchResult(connection.id);
            }
          }}
        >
          <CardBody
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <div
              style={{
                flex: 1,
                minWidth: 0,
                textAlign: "left",
                paddingRight: "82px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  minWidth: 0,
                }}
              >
                <CardTitle style={{ margin: 0 }}>{connection.name}</CardTitle>
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
              </div>
              <CardSubtitle>{connection.role}</CardSubtitle>
              <div style={{ display: "flex", gap: "6px", marginTop: "8px", flexWrap: "wrap" }}>
                {connection.sharedStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: "var(--kendo-color-base-subtle)",
                      borderRadius: "4px",
                      padding: "2px 8px",
                      fontSize: "12px",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </CardBody>
          <span
            style={{
              position: "absolute",
              top: "50%",
              right: "25px",
              transform: "translateY(-50%)",
              background: getMatchPercentageColor(connection.matchPercentage),
              color: "var(--kendo-color-on-primary)",
              width: "50px",
              height: "50px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              fontSize: "15px",
              fontWeight: 800,
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            {connection.matchPercentage}%
          </span>
        </Card>
      ))}
    </div>
  );
};
