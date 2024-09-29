import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Switch } from "./ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggle = (checked) => {
    setTheme(checked ? "dark" : "light"); // Toggle between light and dark themes
  };

  return (
    <div className="flex gap-2">
      <Sun className={`h-[1.2rem] w-[1.2rem]  `} />
      <Switch checked={theme === "dark"} onCheckedChange={handleToggle} />
      <Moon className="h-[1.2rem] w-[1.2rem]  transition-all  " />
    </div>
  );
}
