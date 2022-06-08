import Link from "next/link";
interface Props {
  to: any;
  name: String;
}
export default function NavLink({ to, name }: Props) {
  return (
    <Link href={to}>
      <div className="cursor-pointer">
        <h2 className="font-semibold text-sky-600">{name}</h2>
      </div>
    </Link>
  );
}
