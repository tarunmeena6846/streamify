import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { motion } from "framer-motion";
import { UserDropDown } from "./UserDropDown";
import { useRecoilState } from "recoil";
import userState from "@/lib/store/user";
import { Search } from "../ui/search";
import { useNavigate } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";

export function Appbar() {
  const navigate = useNavigate();
  const [loginClicked, setIsLoginClicked] = useRecoilState(userState);
  return (
    <nav className="flex items-center gap-2 w-full p-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          // ease: "easeInOut",
          type: "spring",
          damping: 10,
        }}
        className="flex w-full justify-between "
      >
        <button className="flex items-center" onClick={() => navigate("/")}>
          <img src="./streamify.svg" alt="logo" className="w-10 h-10 mr-2" />
          <h1 className="text-xl sm:text-2xl font-bold  sm:block">Streamify</h1>
        </button>

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
              className="hidden md:block"
            >
              Login
            </Button>
          ) : (
            <>
              <UserDropDown />
            </>
          )}
          <MobileMenu />
        </div>
      </motion.div>
    </nav>
  );
}
