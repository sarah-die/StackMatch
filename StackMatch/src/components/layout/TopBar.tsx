import { AppBar, AppBarSection, AppBarSpacer } from "@progress/kendo-react-layout";

export default function TopBar() {
  return (
    <AppBar style={{ background: "var(--color-primary)", color: "#fff" }}>
      <AppBarSection>
        <span style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.5px" }}>
          StackMatch
        </span>
      </AppBarSection>
      <AppBarSpacer />
    </AppBar>
  );
}
