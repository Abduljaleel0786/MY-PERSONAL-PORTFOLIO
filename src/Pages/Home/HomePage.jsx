import Sidebar from "./Sidebar";
import Hero from "./Hero";
import Biography from "../Biography/Biography";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 bg-gray-900 text-white">
        <Hero />
        <Biography />
      </div>
    </div>
  );
}
