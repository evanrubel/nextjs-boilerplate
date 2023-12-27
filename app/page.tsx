import Footer from "./components/Footer";
// import Panel from "./components/Panel";
import Profile from "./components/Profile";
import { getTimeOfDayString } from "./utils/utils";

export default function Home() {
  // const panels = ["About", "Projects", "Contact"];
  {
    /* {panels.map((panel) => (
        <Panel key={panel} />
      ))} */
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Profile />

      <h3 className="mt-4 font-italics">
        Good {getTimeOfDayString()}! My name is Evan, and I&#39;m a fourth-year
        student at MIT studying Computer Science.
      </h3>
      <Footer />
    </main>
  );
}
