import { Card, CardBody, CardSubtitle, CardTitle } from "@progress/kendo-react-layout";
import { MOCK_CONNECTIONS } from "../constants/connections";

function getMatchPercentageColor(percentage: number): string {
  if (percentage < 35) return "var(--kendo-color-tertiary-emphasis)";
  if (percentage < 65) return "var(--kendo-color-tertiary)";
  return "var(--kendo-color-info)";
}

export default function ConnectionsPage() {
  return (
    <div style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <h2 style={{ margin: 0 }}>Connections</h2>
      <p style={{ margin: 0, color: "var(--color-muted)", fontSize: "14px" }}>
        People you've matched with at this event.
      </p>

      {MOCK_CONNECTIONS.map((connection) => (
        <Card key={connection.id} style={{ width: "100%" }}>
          <CardBody
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
              <CardTitle>{connection.name}</CardTitle>
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
            <span
              style={{
                flexShrink: 0,
                background: getMatchPercentageColor(connection.matchPercentage),
                color: "var(--kendo-color-on-primary)",
                width: "52px",
                height: "52px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                fontSize: "13px",
                fontWeight: 700,
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              {connection.matchPercentage}%
            </span>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
