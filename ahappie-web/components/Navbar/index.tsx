import Link from "next/link";
import NavLink from "./NavLink";
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
          <NavLink to="/" name="Home" />
          <NavLink to="/maaltijden" name="Maaltijden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
