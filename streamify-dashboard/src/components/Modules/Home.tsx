import DashboardLayout from "./DashboardLayout";
import { Hero } from "./Hero";

const Home = () => {
  return (
    <DashboardLayout>
      {/* Your dashboard content goes here */}
      <Hero />
      {/* Charts, Tables, etc. */}
    </DashboardLayout>
  );
};

export default Home;
