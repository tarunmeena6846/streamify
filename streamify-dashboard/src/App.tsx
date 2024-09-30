import { ThemeProvider } from "@/components/theme-provider";
import { Appbar } from "./components/Modules/Appbar";
import { RecoilRoot } from "recoil";
import { Hero } from "./components/Modules/Hero";
import Home from "./components/Modules/Home";
function App() {
  return (
    <RecoilRoot>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* <ModeToggle /> */}
        <Appbar />
        {/* <Hero /> */}
        <Home />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
