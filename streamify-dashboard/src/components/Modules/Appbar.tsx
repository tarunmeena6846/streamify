import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { motion } from "framer-motion";

import { UserDropDown } from "./UserDropDown";
import { useRecoilState } from "recoil";
import userState from "@/lib/store/user";
export function Appbar() {
  const [loginClicked, setIsLoginClicked] = useRecoilState(userState);
  return (
    <nav className="flex items-center gap-2 py-6 w-full">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          damping: 10,
        }}
        className="flex w-full justify-between mx-auto bg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border border-primary/10 p-6 rounded-2xl"
      >
        {/* <div className="flex justify-between justify-center items-center p-4  rounded-lg  w-3/4"> */}
        <div className="flex items-center">
          <img src="./streamify.svg" alt="logo" className="w-10 h-10 mr-2" />
          <h1 className="text-2xl font-bold">Streamify</h1>
        </div>

        <div className="flex items-center gap-4">
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
