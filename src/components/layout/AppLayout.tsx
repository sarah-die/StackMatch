import { Outlet } from "react-router-dom";
import { BottomNav } from "./BottomNav";
import { TopBar } from "./TopBar";

export const AppLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
      <TopBar />
      <main
        style={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          paddingBottom: "60px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};
