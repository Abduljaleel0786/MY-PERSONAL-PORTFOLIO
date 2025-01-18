import Sidebar from "./Sidebar";
import Hero from "./Hero";
import Biography from "../Biography/Biography";
import Skills from "../Biography/Skills";
import Certificates from "../Biography/Certificates";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 bg-gray-900 text-white">
        <Hero />
        {/* <Biography /> */}
        {/* <Skills /> */}
        <Certificates />
      </div>
    </div>
  );
}
