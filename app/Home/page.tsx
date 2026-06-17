import { Hero } from "../components/Hero";
import { Roles } from "../components/Roles";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Roles />
      <Projects />
    </div>
  );
}
