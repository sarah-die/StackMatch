import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import TopBar from "./TopBar";

export default function AppLayout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
      <TopBar />
      <main style={{ flex: 1, overflowY: "auto", paddingBottom: "60px" }}>
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
