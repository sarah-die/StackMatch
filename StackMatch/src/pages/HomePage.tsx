import { Button } from "@progress/kendo-react-buttons";
import { Card, CardBody, CardTitle } from "@progress/kendo-react-layout";

export default function HomePage() {
  return (
    <div style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <h2 style={{ margin: 0 }}>My QR Code</h2>

      <Card>
        <CardBody
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            padding: "32px 16px",
          }}
        >
          {/* Placeholder QR code area */}
          <div
            style={{
              width: 200,
              height: 200,
              background: "var(--kendo-color-base-subtle)",
              border: "2px dashed var(--kendo-color-border-alt)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--kendo-color-subtle)",
              fontSize: "14px",
            }}
          >
            QR Code
          </div>
          <CardTitle>Your shareable code</CardTitle>
          <p
            style={{
              margin: 0,
              color: "var(--color-muted)",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            Let others scan this to see your match percentage and conversation starters.
          </p>
        </CardBody>
      </Card>

      <Button themeColor="primary" size="large" style={{ width: "100%" }}>
        Share Profile
      </Button>
    </div>
  );
}
