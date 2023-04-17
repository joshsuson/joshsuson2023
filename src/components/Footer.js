export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-6 py-12 mt-4 lg:mt-0 ">
      <div className="p-2 border-2 border-black bg-[#1d9bf0] custom-shadow">
        <a
          href="https://twitter.com/joshsuson"
          className="text-2xl font-semibold"
        >
          TW.
        </a>
      </div>
      <div className="p-2 border-2 border-black bg-[#0b66c2] custom-shadow">
        <a
          href="https://www.linkedin.com/in/joshsuson/"
          className="text-2xl font-semibold"
        >
          LN.
        </a>
      </div>
      <div className="p-2 border-2 border-black bg-[#f0f6fc] custom-shadow">
        <a
          href="https://github.com/joshsuson"
          className="text-2xl font-semibold"
        >
          GH.
        </a>
      </div>
    </footer>
  );
}
