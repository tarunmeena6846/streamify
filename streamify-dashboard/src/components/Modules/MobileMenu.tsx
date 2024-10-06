import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BarChart,
  Users,
  Music,
  DollarSign,
  Settings,
  LogIn,
  LogOut,

  //   User,
} from "lucide-react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { HomeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import userState from "@/lib/store/user";
import { UserDropDown } from "./UserDropDown";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ModeToggle } from "../mode-toggle";

export function MobileMenu() {
  const navigate = useNavigate();
  const [loginClicked, setIsLoginClicked] = useRecoilState(userState);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <HamburgerMenuIcon className="h-6 w-6 md:hidden" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex items-center mb-3">
          {loginClicked && (
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          )}
        </SheetHeader>
        <nav className="flex flex-col gap-4">
          <button
            className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
            onClick={() => navigate("/")}
          >
            <HomeIcon />
            <span className="">Home</span>
          </button>

          <button
            onClick={() => navigate("/user-analytics")}
            className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
          >
            <Users />
            <span className="">User Insights</span>
          </button>

          <button
            onClick={() => navigate("/stream-analytics")}
            className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
          >
            <Music />
            <span className="">Streaming Analytics</span>
          </button>

          <button
            onClick={() => navigate("/revenue-analytics")}
            className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
          >
            <DollarSign />
            <span className="">Revenue Analytics</span>
          </button>

          <button
            onClick={() => navigate("/settings")}
            disabled
            className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
          >
            <Settings />
            <span className="">Settings</span>
          </button>
          {!loginClicked ? (
            <button
              onClick={() => {
                setIsLoginClicked(true);
              }}
              className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
            >
              <LogIn />
              <span>Login</span>
            </button>
          ) : (
            <button
              onClick={() => {
                setIsLoginClicked(false);
              }}
              className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
            >
              <LogOut />
              <span>Logout</span>
            </button>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
