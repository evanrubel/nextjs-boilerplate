import Footer from "./components/Footer";
import Panel from "./components/Panel";
import Profile from "./components/Profile";

export default function Home() {
  const panels = ["About", "Projects", "Contact"];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Profile />
      {panels.map((panel) => (
        <Panel key={panel} />
      ))}
      <Footer />
    </main>
  );
}
