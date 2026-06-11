import { BottomNavigation } from "@progress/kendo-react-layout";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { text: "Home", icon: "home", route: "/home" },
  { text: "Match", icon: "qr-code", route: "/match" },
  { text: "Connections", icon: "user", route: "/connections" },
  { text: "Profile", icon: "myspace-box", route: "/profile" },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = NAV_ITEMS.map((item) => ({
    text: item.text,
    icon: item.icon,
    route: item.route,
    selected: location.pathname.startsWith(item.route),
  }));

  return (
    <BottomNavigation
      items={items}
      onSelect={(e) => navigate(NAV_ITEMS[e.itemIndex].route)}
      style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100 }}
    />
  );
}
