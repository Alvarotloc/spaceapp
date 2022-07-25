import { FC } from "react";
import type { IChildren } from "../interfaces/index";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

const LayoutPrincipal: FC<IChildren> = ({ children }): JSX.Element => {
  const { asPath } = useRouter();
  const DICCIONARIO_RUTAS = {
    "/": "Home",
    "/destination": "Destination",
    "/crew": "Crew",
    "/technology": "Technology",
  };
  return (
    <>
      <Head>
        <title>
          SpaceApp -{" "}
          {DICCIONARIO_RUTAS[asPath as keyof typeof DICCIONARIO_RUTAS]}
        </title>
        <meta
          name="description"
          content="Aplicación web sobre viajes espaciales"
        />
        <meta
          property="og:title"
          content="SpaceApp - Aplicacion Espacial"
        />
        <meta
          property="og:description"
          content="Aplicación web futurista sobre viajes espaciales"
        />
        <meta
          property="og:image"
          content="/assets/ogImage.webp"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./assets/favicon-32x32.png"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default LayoutPrincipal;
