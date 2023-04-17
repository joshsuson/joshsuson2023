/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import grid from "../../public/grid.png";
import waves from "../../public/waves.png";

export default function Home() {
  return (
    <Layout>
      <div className="relative px-4 lg:px-0 mt-12">
        <div className="absolute z-10 -top-10 -left-16 lg:left-20 lg:-top-12">
          <Image src={grid} alt="grid decoration" />
        </div>
        <div className="absolute z-10 -bottom-12 -right-32 lg:right-12 lg:-bottom-16">
          <Image src={waves} alt="wave decoration" />
        </div>
        <div className="text-center max-w-4xl mx-auto border-2 border-black bg-champagne-100 py-8 px-4 custom-shadow relative z-20">
          <h1 className="text-5xl lg:text-8xl font-semibold tracking-wider">
            Hey 👋, <br /> I'm Josh.
          </h1>
          <p className="text-3xl mt-4">
            A Frontend Web Developer who loves all things technology and is
            always trying to learn something new.
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 mt-12">
            <Link
              href="/about"
              className="border-2 border-black bg-carnation-400 text-2xl font-bold py-4 block w-full lg:w-3/12 custom-shadow"
            >
              About Me
            </Link>
            <Link
              href="/work"
              className="border-2 border-black bg-champagne-300 text-2xl font-bold py-4 block w-full lg:w-3/12 custom-shadow"
            >
              My Work
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
