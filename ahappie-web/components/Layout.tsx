import Head from "next/head";

interface Props {
  title: String;
  children: React.ReactNode;
}

export default function Layout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title} &middot; AHappie </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="min-h-screen">{children}</main>
      <footer className="flex flex-row justify-center p-4">
        {" "}
        &copy; 2022 AHappie
      </footer>
    </>
  );
}
