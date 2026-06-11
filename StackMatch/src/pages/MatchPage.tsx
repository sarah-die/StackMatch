import { Button } from "@progress/kendo-react-buttons";
import { useNavigate } from "react-router-dom";

export default function MatchPage() {
  const navigate = useNavigate();

  function handleSimulateScan() {
    // Placeholder: navigate to a mock match result
    navigate("/match/demo-user");
  }

  return (
    <div style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <h2 style={{ margin: 0 }}>Scan & Match</h2>
      <p style={{ margin: 0, color: "var(--color-muted)" }}>
        Point your camera at someone's StackMatch QR code to see your compatibility.
      </p>

      {/* Placeholder camera/scanner area */}
      <div
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          background: "#111",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          color: "#fff",
          fontSize: "14px",
        }}
      >
        <span style={{ fontSize: "48px" }}>📷</span>
        <span>Camera viewfinder</span>
      </div>

      <Button
        themeColor="primary"
        size="large"
        style={{ width: "100%" }}
        onClick={handleSimulateScan}
      >
        Simulate Scan (Demo)
      </Button>
    </div>
  );
}
