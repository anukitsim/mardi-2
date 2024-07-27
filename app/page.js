import MainGrid from "./components/MainGrid";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
<div className="pt-44">
<MainGrid />
</div>

    </main>
  );
}
