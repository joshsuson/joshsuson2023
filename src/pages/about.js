/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/Layout";
import Image from "next/image";
import newJosh from "../../public/josh.jpg";
import yellowStar from "../../public/yellow-star.png";
import greenStar from "../../public/green-star.png";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <div className="relative my-24 px-4 lg:px-0">
        <div className="absolute z-30 -top-12 -left-12">
          <Image
            src={yellowStar}
            className="w-32"
            alt="yellow star decoration"
          />
        </div>
        <div className="hidden xl:block absolute bottom-48 left-[28.5rem] z-10">
          <Image src={greenStar} className="w-20" alt="green star decoration" />
        </div>
        <div className="border-4 border-black large-custom-shadow lg:absolute z-20 lg:w-[500px] aspect-square object-contain">
          <Image
            priority
            src={newJosh}
            alt="Photo of Josh sitting with his laptop"
            className="object-cover aspect-square object-right"
            placeholder="blur"
          />
        </div>
        <div className="bg-champagn-100 text-center lg:text-left border-2 border-black large-custom-shadow px-4 py-8 lg:ml-64 mt-12 lg:pl-72">
          <h1 className="text-4xl font-semibold mb-4">Hello, I'm Josh Suson</h1>
          <p className="text-2xl mb-4">
            I am a Frontend Web Developer that focuses on React and other
            javascript frameworks. I love to build neat products that are simple
            and provide value to people's lives. I care a lot about truth,
            because of that I like to make straight forward products that do
            exactly what the customer expects it to do. I always strive for
            excellence and put a high priority on attention to detail.
          </p>
          <p className="text-2xl">
            I love Jesus, my family, great stories, and techonology. Normally
            you can find me trying to intersect all of those things. When I'm
            not building websites I like to spend time reading comic books (both
            american and japanese), playing video games, or spending time with
            my wife and kids. I love to learn and am always taking some sort of
            tutorial about something. Recently I set out to learn two things:
            Spanish and how to build video games.
          </p>
          <Link
            href="/work"
            className="border-2 border-black bg-carnation-400 text-2xl font-bold py-4 block mt-8 custom-shadow lg:max-w-fit px-8"
          >
            View My Work
          </Link>
        </div>
      </div>
    </>
  );
}
