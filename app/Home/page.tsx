import { Hero } from "../components/Hero";
import { Roles } from "../components/Roles";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Roles />
      <Projects />
      <Footer />
    </div>
  );
}
