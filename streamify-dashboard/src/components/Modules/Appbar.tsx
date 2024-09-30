import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { motion } from "framer-motion";

import { UserDropDown } from "./UserDropDown";
import { useRecoilState } from "recoil";
import userState from "@/lib/store/user";
import NavLink from "./Navlink";
import { Search } from "../ui/search";
export function Appbar() {
  const [loginClicked, setIsLoginClicked] = useRecoilState(userState);
  return (
    <nav className="flex items-center gap-2 w-full p-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          damping: 10,
        }}
        className="flex w-full justify-between "
      >
        {/* <div className="flex justify-between justify-center items-center p-4  rounded-lg  w-3/4"> */}
        <div className="flex items-center">
          <img src="./streamify.svg" alt="logo" className="w-10 h-10 mr-2" />
          <h1 className="text-2xl font-bold">Streamify</h1>
        </div>
        {/* <div className="flex items-center gap-4 rounded-3xl">
          <NavLink href="/dashboard">Home</NavLink>
          <NavLink href="/dashboard">Dashboard</NavLink>
          <NavLink href="/data">Data Visualization</NavLink>
          <NavLink href="/streams">Streaming Analytics</NavLink>
        </div> */}

        <div className="flex items-center gap-4">
          <Search />
          <ModeToggle />
          {!loginClicked ? (
            <Button
              variant={"login"}
              size={"lg"}
              onClick={() => {
                setIsLoginClicked(true);
              }}
            >
              Login
            </Button>
          ) : (
            <>
              <UserDropDown />
            </>
          )}
        </div>
        {/* </div> */}
      </motion.div>
    </nav>
  );
}
