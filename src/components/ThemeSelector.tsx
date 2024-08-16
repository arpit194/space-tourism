import { useTheme } from "@/providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export default function ThemeSelector() {
  const { themeMode, setTheme } = useTheme();

  return (
    <div className="flex gap-2 absolute right-4 bottom-4">
      {themeMode === "light" && (
        <button
          className="bg-foreground text-background rounded-full p-2 hover:opacity-90"
          onClick={() => setTheme("dark")}
        >
          <Moon />
        </button>
      )}
      {themeMode === "dark" && (
        <button
          className="bg-foreground text-background rounded-full p-2 hover:opacity-90"
          onClick={() => setTheme("light")}
        >
          <Sun />
        </button>
      )}
    </div>
  );
}
