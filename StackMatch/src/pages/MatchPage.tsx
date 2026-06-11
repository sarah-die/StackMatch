import { Button } from "@progress/kendo-react-buttons";
import { Card, CardBody } from "@progress/kendo-react-layout";
import { useNavigate } from "react-router-dom";

export const MatchPage = () => {
  const navigate = useNavigate();

  const handleSimulateScan = () => {
    // Placeholder: navigate to a mock match result
    navigate("/match/demo-user");
  };

  return (
    <div
      style={{
        padding: "20px 16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        flex: 1,
        height: "100%",
        minHeight: 0,
      }}
    >
      <Card style={{ flex: 1, display: "flex", minHeight: 0 }}>
        <CardBody
          style={{
            textAlign: "left",
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            flex: 1,
            minHeight: 0,
            height: "100%",
          }}
        >
          <h2 style={{ margin: 0, color: "var(--kendo-color-black)" }}>Scan & Match</h2>
          <p
            style={{
              margin: 0,
              color: "var(--kendo-color-black)",
              fontSize: "14px",
              maxWidth: "62ch",
            }}
          >
            Point your camera at someone&apos;s StackMatch QR code to see your compatibility and get
            tailored conversation starters.
          </p>

          <div
            style={{
              width: "100%",
              flex: "1 1 auto",
              minHeight: "380px",
              backgroundColor: "var(--kendo-color-base-subtle)",
              border: "2px dashed var(--kendo-color-border-alt)",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              color: "var(--kendo-color-subtle)",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: "44px", lineHeight: 1 }}>📷</span>
            <span>Center a QR code inside the frame</span>
            <span style={{ fontSize: "12px" }}>Scanning will open your match result instantly</span>
          </div>

          <Button
            themeColor="primary"
            size="large"
            style={{ width: "100%" }}
            onClick={handleSimulateScan}
          >
            Simulate Scan (Demo)
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};
