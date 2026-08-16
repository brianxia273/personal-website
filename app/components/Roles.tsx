import { type Link } from "../types";

interface Role {
  img: string;
  company: string;
  role: string;
  time: string;
  descrip: string;
  skills: string[];
  links?: Link[];
}

const roles: Role[] = [
  {
    img: "/Circle_Pru_Rrock.avif",
    company: "Prudential Financial",
    role: "Global Technology & Operations Intern",
    time: "Jun - Aug 2026",
    descrip:
      "Built full-stack tools for distribution operations and financial advisors, and spearheaded a mutation testing tool with Claude (Bedrock) integration.",
    skills: ["React", "Node.js"],
  },
  {
    img: "/Cornell_University_seal.svg.png",
    company: "Cornell University",
    role: "Teaching Assistant, CS 2110",
    time: "Jan 2026 - Present",
    descrip:
      "Holding weekly discussions, office hours, and grading for an algorithms and data structures course.",
    skills: ["Java"],
  },
  {
    img: "/cync_ai_logo.jpeg",
    company: "CYNC",
    role: "Software Development Intern",
    time: "August - Dec 2025",
    descrip:
      "Built mobile features, auth flow, and microservices powering a wearable health data startup.",
    skills: ["React Native", "Lambda"],
  },
  {
    img: "/Cornell_University_seal.svg.png",
    company: "J2 Lab",
    role: "Undergraduate Researcher",
    time: "Feb - Dec 2025",
    descrip:
      "Developed meta-learning neural network models to optimize superconductor film production",
    skills: ["Python", "Tensorflow"],
    links: [
      {
        name: "NbTiN Models",
        url: "https://github.com/brianxia273/NbTiN-NNReactiveSputtering",
      },
      {
        name: "NbTi Models",
        url: "https://github.com/brianxia273/NNReactiveSputtering",
      },
    ],
  },
];

function RoleCard({ role }: { role: Role }) {
  return (
    <div
      className="flex flex-col sm:flex-row gap-6 text-xl text-charcoal leading-relaxed rounded-[20px]
    hover:shadow-[0_1px_2px_rgba(0,0,0,0.06),0_12px_24px_rgba(0,0,0,0.08)] py-10 px-5 transition ease-in-out"
    >
      <p className="w-full sm:w-50 text-charcoal/60 order-2 sm:order-1">
        {role.time}
      </p>
      <div className="flex flex-col w-full sm:w-100 gap-4 order-1 sm:order-2">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <img
              src={role.img}
              className="h-5 w-5 object-contain rounded-full overflow-hidden"
            />
            <h2 className="font-semibold">{role.company}</h2>
          </div>
          <h3>{role.role}</h3>
          <p className="text-charcoal/90 font-light mt-4">{role.descrip}</p>
          {role.links && (
            <div className="flex gap-2 text-charcoal/90 font-light mt-4 text-md">
              {/* {role.links.map((l: Link) => (
                <a
                  href={l.url}
                  target="_blank"
                  className="hover:underline hover:text-[#B31B1B] transition-colors"
                >
                  {l.name}
                </a>
              ))} */}
            </div>
          )}
        </div>

        <div className="flex gap-2 flex-wrap">
          {role.skills.map((s, index) => {
            return (
              <div
                className="border rounded-2xl w-fit px-2 text-base"
                key={index}
              >
                {s}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Roles() {
  return (
    <div className="w-full border-b px-5 sm:px-20 md:px-20 lg:px-18 flex justify-center pt-20 pb-20">
      <div className="flex flex-col w-full gap-10">
        <h1 className="text-6xl font-medium">Roles</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 lg:gap-y-15">
          {roles.map((r, index) => {
            return <RoleCard role={r} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
