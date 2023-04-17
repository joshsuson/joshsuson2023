import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Nav({ setOpen, open }) {
  const router = useRouter();

  function handleClick(url) {
    router.push(url);
    setOpen(false);
  }

  return (
    <div
      className={`absolute min-h-screen w-full border-4 border-black bg-champagne-100 z-40 transition-all ease-in-out duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="max-w-7xl mx-auto py-6 px-4 flex items-center justify-between">
        <button onClick={() => handleClick("/")}>
          <div className="text-3xl lg:text-5xl font-semibold text-champagne-100 text-border tracking-widest">
            <span className="text-carnation-400">J</span>
            osh <span className="text-carnation-400">S</span>
            uson
          </div>
        </button>
        <div
          onClick={() => setOpen(false)}
          className="bg-carnation-400 border-2 border-black p-2 custom-shadow cursor-pointer"
        >
          <div>
            <AiOutlineClose size={30} />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-3xl flex flex-col gap-10 items-center py-24">
        <button
          onClick={() => handleClick("/about")}
          className="border-2 border-black bg-carnation-400 text-4xl font-bold py-8 block w-7/12 custom-shadow"
        >
          About Me
        </button>
        <button
          onClick={() => handleClick("/work")}
          className="border-2 border-black bg-champagne-300 text-4xl font-bold py-8 block w-7/12 custom-shadow"
        >
          My Work
        </button>
      </div>
    </div>
  );
}
