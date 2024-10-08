import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  HomeIcon,
  Users,
  Music,
  DollarSign,
  Settings,
  LogIn,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import userState from "@/lib/store/user";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

// Reusable NavItem component
const NavItem = ({
  Icon,
  label,
  onClick,
  disabled = false,
}: {
  Icon: any;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <SheetClose asChild>
      <button
        onClick={onClick}
        disabled={disabled}
        className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
      >
        <Icon />
        <span>{label}</span>
      </button>
    </SheetClose>
  );
};

// Avatar section component
const AvatarSection = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <SheetHeader className="flex items-center mb-3">
      {isLoggedIn && (
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      )}
    </SheetHeader>
  );
};

// Login/Logout button component
const LoginButton = ({
  isLoggedIn,
  toggleLogin,
}: {
  isLoggedIn: boolean;
  toggleLogin: () => void;
}) => {
  return (
    <button
      onClick={toggleLogin}
      className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
    >
      {isLoggedIn ? (
        <>
          <LogOut />
          <span>Logout</span>
        </>
      ) : (
        <>
          <LogIn />
          <span>Login</span>
        </>
      )}
    </button>
  );
};

// Main MobileMenu component
export function MobileMenu() {
  const navigate = useNavigate();
  const [loginClicked, setIsLoginClicked] = useRecoilState(userState);

  const handleLoginClick = () => setIsLoginClicked(!loginClicked);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <HamburgerMenuIcon className="h-6 w-6 md:hidden" />
      </SheetTrigger>
      <SheetContent>
        <AvatarSection isLoggedIn={loginClicked} />

        <nav className="flex flex-col gap-4">
          <NavItem Icon={HomeIcon} label="Home" onClick={() => navigate("/")} />
          <NavItem
            Icon={Users}
            label="User Insights"
            onClick={() => navigate("/user-analytics")}
          />
          <NavItem
            Icon={Music}
            label="Streaming Analytics"
            onClick={() => navigate("/stream-analytics")}
          />
          <NavItem
            Icon={DollarSign}
            label="Revenue Analytics"
            onClick={() => navigate("/revenue-analytics")}
          />
          <NavItem
            Icon={Settings}
            label="Settings"
            onClick={() => navigate("/settings")}
            disabled
          />
          <LoginButton
            isLoggedIn={loginClicked}
            toggleLogin={handleLoginClick}
          />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
