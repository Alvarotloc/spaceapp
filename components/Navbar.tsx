import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar: FC = (): JSX.Element => {
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);
  const { asPath } = useRouter();
  const toggleSidebar = (): void => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <div className={styles.contenedor_navbar}>
      <div className={styles.contenedor_navbar__logo}>
        <Link href="/">
          <Image
            src={"/assets/shared/logo.svg"}
            alt="Logo de la empresa"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </Link>
      </div>
      <div
        className={`${styles.contenedor_navbar__menu} ${
          sidebarVisible ? styles["contenedor_navbar__menu-activo"] : ""
        }`}
        onClick={toggleSidebar}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav
        className={`${styles.contenedor_navbar__navegacion} ${
          sidebarVisible ? styles["contenedor_navbar__navegacion-visible"] : ""
        }`}
        onClick={toggleSidebar}
      >
        <div className={styles["contenedor_navbar__navegacion-line"]} />
        <Link href={"/"}>
          <a
            className={
              asPath === "/"
                ? styles["contenedor_navbar__navegacion-enlace_activo"]
                : ""
            }
          >
            <span>00</span> HOME
          </a>
        </Link>
        <Link href={"/destination"}>
          <a
            className={
              asPath === "/destination"
                ? styles["contenedor_navbar__navegacion-enlace_activo"]
                : ""
            }
          >
            <span>01</span> DESTINATION
          </a>
        </Link>
        <Link href={"/crew"}>
          <a
            className={
              asPath === "/crew"
                ? styles["contenedor_navbar__navegacion-enlace_activo"]
                : ""
            }
          >
            <span>02</span> CREW
          </a>
        </Link>
        <Link href={"/technology"}>
          <a
            className={
              asPath === "/technology"
                ? styles["contenedor_navbar__navegacion-enlace_activo"]
                : ""
            }
          >
            <span>03</span> TECHNOLOGY
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
