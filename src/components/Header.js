import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header({ setOpen }) {
  return (
    <header className="border-4 lg:border-t-0 border-black px-4 py-6 flex items-center justify-between">
      <Link href="/">
        <div className="text-3xl lg:text-5xl font-semibold text-champagne-100 text-border tracking-widest">
          <span className="text-carnation-400">J</span>
          osh <span className="text-carnation-400">S</span>
          uson
        </div>
      </Link>
      <div
        onClick={() => setOpen(true)}
        className="bg-carnation-400 border-2 border-black p-2 custom-shadow cursor-pointer"
      >
        <div>
          <GiHamburgerMenu size={30} />
        </div>
      </div>
    </header>
  );
}
