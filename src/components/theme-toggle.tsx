import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const defaultTheme =
    (typeof localStorage !== "undefined"
      ? localStorage.getItem("theme")
      : "light ") ?? "light";

  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Button variant="ghost" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
}
