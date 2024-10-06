import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Switch } from "./ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggle = (checked: boolean) => {
    console.log(typeof checked);
    setTheme(checked ? "dark" : "light"); // Toggle between light and dark themes
  };

  return (
    <div className="flex gap-2 ">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] ${
          theme === "dark" ? "" : "text-blue-500"
        } `}
      />
      <Switch checked={theme === "dark"} onCheckedChange={handleToggle} />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] ${
          theme === "dark" ? "text-blue-500" : ""
        } `}
      />
    </div>
  );
}
