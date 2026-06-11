import { AppBar, AppBarSection, AppBarSpacer } from "@progress/kendo-react-layout";
import logoSvg from "../../assets/logo.svg";

export const TopBar = () => {
  return (
    <AppBar style={{ background: "var(--color-primary)", color: "#fff" }}>
      <AppBarSection>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <img
            src={logoSvg}
            alt="StackMatch logo"
            style={{ width: "28px", height: "28px", objectFit: "contain" }}
          />
          <span style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.5px" }}>
            StackMatch
          </span>
        </div>
      </AppBarSection>
      <AppBarSpacer />
    </AppBar>
  );
};
