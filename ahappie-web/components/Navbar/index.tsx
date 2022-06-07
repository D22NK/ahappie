import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div className="p-4 flex flex-row items-center border-b-2 border-slate-100">
        <Link href="/">
          <h1 className="font-bold italic font-mono text-2xl text-sky-600 cursor-pointer">
            <span className="text-sky-700">AH</span>appie
          </h1>
        </Link>
        <div className="ml-8 flex flex-row gap-8 flex-1">
          <Link href="/">
            <div className="cursor-pointer">
              <h2 className="font-semibold text-sky-600">Home</h2>
            </div>
          </Link>

          <Link href="/">
            <div className="cursor-pointer">
              <h2 className="font-semibold text-sky-600">Maaltijden</h2>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
