import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import AlmaPage from "./AlmaPage";
import PulsePage from "./PulsePage";
import CurioPage from "./CurioPage";
import GlassOrbCursor from "./GlassOrbCursor";

function routeFromHash(): string {
  const h = window.location.hash.replace(/^#\/?/, "");
  if (h === "alma")  return "alma";
  if (h === "pulse") return "pulse";
  if (h === "curio") return "curio";
  return "home";
}

export default function App() {
  const [route, setRoute] = useState<string>(routeFromHash());

  // Keep state in sync with the URL hash (handles browser back/forward).
  useEffect(() => {
    const onHashChange = () => setRoute(routeFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Scroll to top whenever the page changes.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  const navigate = (page: string) => {
    const target = page === "alma" ? "alma" : page === "pulse" ? "pulse" : page === "curio" ? "curio" : "home";
    window.location.hash = target;
    setRoute(target);
  };

  // Only show glass orb cursor on desktop with hover capability
  const showCursor =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  return (
    <>
      {showCursor && <GlassOrbCursor />}
      {route === "alma" && <AlmaPage onNavigate={navigate} />}
      {route === "pulse" && <PulsePage onNavigate={navigate} />}
      {route === "curio" && <CurioPage onNavigate={navigate} />}
      {route === "home" && <HomePage onNavigate={navigate} />}
    </>
  );
}
