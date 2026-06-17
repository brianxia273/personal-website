import Image from "next/image";
import HomePage from "@/app/Home/page";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <>
      <HomePage />
      <Analytics />
    </>
  );
}
