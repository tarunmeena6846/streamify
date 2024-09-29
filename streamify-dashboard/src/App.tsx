import { ThemeProvider } from "@/components/theme-provider";
import { Appbar } from "./components/Modules/Appbar";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <RecoilRoot>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div>
          {/* <ModeToggle /> */}
          <Appbar />
        </div>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
