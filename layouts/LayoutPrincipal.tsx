import { FC } from "react";
import type { IChildren } from "../interfaces/index";
import Head from "next/head";
import Navbar from "../components/Navbar";

const LayoutPrincipal: FC<IChildren> = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>SpaceApp</title>
        <meta name="description" content="Aplicación web sobre viajes espaciales" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./assets/favicon-32x32.png"
        />
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  );
};

export default LayoutPrincipal;
