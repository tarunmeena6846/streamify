import userState from "@/lib/store/user";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogOut, UserRound } from "lucide-react";
import { useRecoilState } from "recoil";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function UserDropDown() {
  const [loginClicked, setIsLoginClicked] = useRecoilState(userState);

  const dropDownData = [
    {
      name: "Profile",
      icon: <UserRound size={15} />,
      href: "/profile",
    },
  ];
  return (
    <div className="hidden md:block">
      <DropdownMenu>
        <DropdownMenuTrigger className=" flex items-center justify-center">
          <div className="p-1 border-2 rounded-full bg-black text-white dark:bg-white dark:text-black ">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-[15rem] dark:shadow-[#030712] translate-y-8 scale-110 -translate-x-10 shadow-lg">
          <DropdownMenuLabel className="flex gap-4 items-center">
            <div className="!w-[2rem] flex items-center p-[0.2rem]  justify-center h-8">
              <div className="p-1 border-2 rounded-full border-[#1a1a1a]">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="max-w-[200px]">{"John Doe"}</span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          {dropDownData.map((item, index) => {
            return (
              <DropdownMenuItem className="flex gap-2" key={index}>
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          {/* {user && ( */}
          <DropdownMenuItem
            onClick={async () => {
              setIsLoginClicked(false);
            }}
            className=" flex gap-2 focus:bg-[#f34e4e]"
          >
            <LogOut size={15} />
            Logout
          </DropdownMenuItem>
          {/* )} */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
