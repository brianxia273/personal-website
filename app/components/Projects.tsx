import Image from "next/image";
import { type Link } from "../types";

interface Project {
  title: string;
  descrip: string;
  skills: string[];
  gLink?: Link; // github link
  wLink?: Link; // website link
  time: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Cornell Assistive Tech Website + CMS",
    descrip:
      "A rebuild of the organization's Wix site into a custom full-stack app with a CMS for non-developer editing, leading a team of developers and designers.",
    skills: ["Next.js", "Prisma", "Supabase"],
    gLink: {
      name: "Repo",
      url: "https://github.com/cornellassist/cat-website",
    },
    time: "",
    image: "/cat.png",
    wLink: { name: "Website", url: "https://www.cornellassist.com/" },
  },
  {
    title: "WellScout",
    descrip:
      "A fullstack mapping app that analyzes nearby well data to estimate water table depth and recommend low-cost, low-depth drilling sites.",
    skills: ["Next.js", "Supabase"],
    gLink: { name: "Repo", url: "https://github.com/brianxia273/WellScout" },
    time: "",
    image: "/wellscout.png",
  },
  {
    title: "Wheelchair Control Interface",
    descrip:
      "An accessible electric wheelchair with an eye-tracking interface, enabling control for users with limited mobility, built with Cornell Assistive Technologies team.",
    skills: ["Python"],

    // gLink: {
    //   name: "Repo",
    //   url: "https://github.com/cornellassist/Wheelchair-Project",
    // },
    time: "",
    image: "/chair.webp",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col h-120 w-full gap-4">
      <div className="h-60 bg-amber-300 w-full rounded-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-left overflow-hidden rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.06),0_12px_24px_rgba(0,0,0,0.08)]"
        />
      </div>
      <div className="flex flex-col pl-2">
        <h2 className="font-semibold text-xl">{project.title}</h2>
        <p className="h-20 mt-6">{project.descrip}</p>
        <p>
          {project.gLink && (
            <a
              href={project.gLink.url}
              className="underline hover:text-[#B31B1B] transition-colors"
            >
              {project.gLink.name}
            </a>
          )}
          {project.wLink && (
            <a href={project.wLink.url}>
              ,{" "}
              <span className="underline hover:text-[#B31B1B] transition-colors">
                {project.wLink.name}
              </span>
            </a>
          )}
        </p>
        <div className="flex gap-2 mt-4">
          {project.skills.map((s, index) => (
            <div key={index} className="border rounded-2xl w-fit px-2">
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <div className="flex justify-center px-5 sm:px-20 md:px-20 lg:px-18 pt-20 pb-20">
      <div className="flex flex-col w-full gap-15">
        <h1 className="text-6xl font-medium">Projects</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-10 gap-y-10">
          {projects.map((p: Project, index) => (
            <ProjectCard project={p} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
