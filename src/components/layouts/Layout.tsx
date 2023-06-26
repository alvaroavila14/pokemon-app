import Head from "next/head";
import Navbar from "../ui/Navbar";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon Information"}</title>
        <meta
          name="description"
          content="Bring information about pokemon XXXXX"
        />
        <meta name="author" content="Alvarito Avila" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="XXXX, pokemon, pokedex, pokemon information"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};

export default Layout;
