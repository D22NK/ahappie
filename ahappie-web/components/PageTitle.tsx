interface Props {
  title: String;
}

export default function PageTitle({ title }: Props) {
  return (
    <h1 className="text-sky-600 text-2xl font-bold border-b-2 border-sky-700 w-min ">
      {title}
    </h1>
  );
}
