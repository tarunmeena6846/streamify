import { ThemeProvider } from "@/components/theme-provider";
import { Appbar } from "./components/Modules/Appbar";
import { RecoilRoot } from "recoil";
import Home from "./components/Modules/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Dashboard } from "./components/Modules/Dashboard";
import { StreamAnalytics } from "./components/Modules/StreamAnalytics";
import { RevenueAnalytics } from "./components/Modules/RevenueAnalytics";
import { makeServer } from "./server";
makeServer();
function App() {
  return (
    <RecoilRoot>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Appbar />
          {/* <ModeToggle /> */}
          <Routes>
            {/* <Hero /> */}

            <Route path="/" element={<Home />} />
            <Route path="/user-analytics" element={<Dashboard />} />
            <Route path="/stream-analytics" element={<StreamAnalytics />} />
            <Route path="/revenue-analytics" element={<RevenueAnalytics />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
