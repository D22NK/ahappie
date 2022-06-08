interface Props {
  children: React.ReactNode;
}

export default function PageContainer({ children }: Props) {
  return (
    <div className="py-4 px-8  w-full flex flex-row justify-center">
      <div className="w-full max-w-[2000px]">{children}</div>
    </div>
  );
}
