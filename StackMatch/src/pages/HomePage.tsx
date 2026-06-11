import { Button } from "@progress/kendo-react-buttons";
import { Card, CardBody, CardTitle } from "@progress/kendo-react-layout";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px 16px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <Card>
        <CardBody
          style={{
            textAlign: "left",
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            background:
              "linear-gradient(140deg, var(--kendo-color-base-subtle) 0%, color-mix(in srgb, var(--kendo-color-primary) 18%, var(--kendo-color-base-subtle)) 130%)",
          }}
        >
          <h2 style={{ margin: 0, color: "var(--kendo-color-black)" }}>
            Share your stack. Start better conversations.
          </h2>
          <p
            style={{
              margin: 0,
              color: "var(--kendo-color-black)",
              fontSize: "14px",
              maxWidth: "62ch",
            }}
          >
            Your profile is ready. Use your QR to connect instantly with people who share your tech
            interests and get tailored icebreakers right away.
          </p>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "4px" }}>
            <Button themeColor="primary" onClick={() => navigate("/match")}>
              Scan to Match
            </Button>
            <Button fillMode="outline" onClick={() => navigate("/connections")}>
              View Connections
            </Button>
          </div>
        </CardBody>
      </Card>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        <Card style={{ flex: "2 1 420px" }}>
          <CardBody
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "14px",
              padding: "26px 16px 24px",
            }}
          >
            <h2 style={{ margin: 0, color: "var(--kendo-color-black)" }}>My QR Code</h2>

            <div
              style={{
                width: 240,
                height: 240,
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
                color: "var(--kendo-color-subtle)",
                textAlign: "center",
                fontSize: "14px",
                maxWidth: "40ch",
              }}
            >
              Let others scan this to see your match percentage and discover conversation starters
              in seconds.
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
