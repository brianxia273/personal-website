"use client";
import BrianPic from "@/public/1740346772093.jpeg";
import Image from "next/image";

function HeroLeftText() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl font-medium">Brian Xia</h1>
        <div className="flex text-xl justify-center gap-3">
          <h2>Fullstack Dev</h2>
          <div className="">|</div>
          <h2>
            CS <span className="text-[#B31B1B]">@</span> Cornell
          </h2>
        </div>
      </div>
      <div className="flex gap-6 items-center mt-2 ml-0.5">
        <a href="" aria-label="LinkedIn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7 hover:text-[#B31B1B] transition-colors"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a href="" aria-label="GitHub">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7 hover:text-[#B31B1B] transition-colors"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function HeroRightText() {
  return (
    <div className="flex flex-col gap-10 text-xl text-charcoal leading-relaxed w-1/2">
      <div className="flex flex-col gap-5">
        <p>
          I'm a full-stack developer building web and mobile applications across
          healthcare, finance, research, and nonprofit domains.
        </p>
        <p>
          I enjoy the problem-solving process, and I like using web development
          to build practical tools for people to use.
        </p>
        <p>
          I'm currently interning at Prudential Financial and TAing Cornell's
          data structures and algorithms course.
        </p>
      </div>
      <button
        className="w-50 hover:text-[#B31B1B] border py-1 rounded-[1000px] cursor-pointer transition-colors"
        onClick={() => {
          window.open("/Brian_Xia_Resume.pdf", "_blank");
        }}
      >
        See my resume
      </button>
    </div>
  );
}

export function Hero() {
  return (
    <div>
      {/* container */}
      <div className="w-full h-150 border-b-2 flex items-center justify-center px-5 sm:px-20 md:px-20 lg:px-18">
        <div className="flex items-center justify-between h-100 w-full bg-amber-0">
          <HeroLeftText />
          <HeroRightText />
        </div>
      </div>
    </div>
  );
}
