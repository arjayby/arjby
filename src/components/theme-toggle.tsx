import { useState, useEffect, Fragment } from "react";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

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
    <Fragment>
      <div className="flex items-center space-x-2">
        <Switch
          id="airplane-mode"
          checked={theme === "dark"}
          onCheckedChange={toggleTheme}
        />
        <Label htmlFor="airplane-mode">Dark Mode</Label>
      </div>
    </Fragment>
  );
}
