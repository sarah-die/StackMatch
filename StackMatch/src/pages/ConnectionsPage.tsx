import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { Card, CardBody, CardSubtitle, CardTitle } from "@progress/kendo-react-layout";

const MOCK_CONNECTIONS = [
  {
    id: "1",
    name: "Alex Müller",
    role: "Frontend Dev",
    matchPercentage: 91,
    sharedStack: ["React", "TypeScript"],
  },
  {
    id: "2",
    name: "Jamie Lee",
    role: "Full-Stack Engineer",
    matchPercentage: 74,
    sharedStack: ["Node.js", "PostgreSQL"],
  },
  {
    id: "3",
    name: "Sofia Rossi",
    role: "DevOps Engineer",
    matchPercentage: 62,
    sharedStack: ["Docker", "Kubernetes"],
  },
];

export default function ConnectionsPage() {
  return (
    <div style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <h2 style={{ margin: 0 }}>Connections</h2>
      <p style={{ margin: 0, color: "var(--color-muted)", fontSize: "14px" }}>
        People you've matched with at this event.
      </p>

      {MOCK_CONNECTIONS.map((connection) => (
        <BadgeContainer key={connection.id} style={{ width: "100%" }}>
          <Card style={{ width: "100%" }}>
            <CardBody
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <div>
                <CardTitle>{connection.name}</CardTitle>
                <CardSubtitle>{connection.role}</CardSubtitle>
                <div style={{ display: "flex", gap: "6px", marginTop: "8px", flexWrap: "wrap" }}>
                  {connection.sharedStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        background: "#f0f0f0",
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
              <Badge themeColor="info" size="large">
                {connection.matchPercentage}%
              </Badge>
            </CardBody>
          </Card>
        </BadgeContainer>
      ))}
    </div>
  );
}
