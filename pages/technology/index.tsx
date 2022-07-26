import Image from "next/image";
import LayoutPrincipal from "../../layouts/LayoutPrincipal";
import styles from "../../styles/Technology.module.css";
import { useState } from "react";
import type { GetStaticProps, NextPage } from "next";
import type { ITech, TechProps } from "../../interfaces";

const TechonologyPage: NextPage<TechProps> = ({tecnologias}): JSX.Element => {
  const [tech, setTech] = useState<number>(0);
  return (
    <LayoutPrincipal>
      <section className={styles.contenedor_technology}>
        <h1 className={styles["contenedor_technology-titulo"]}>
          <span>03</span> Speed launch 101
        </h1>
        <div className={styles.contenedor_informacion}>
            <a className={`${styles["contenedor_informacion-imagen"]} ${styles.imagen_mobile}`}>
            <Image
              src={tecnologias[tech].imagen}
              alt={`Imagen del miembro ${tecnologias[tech].nombre}`}
              layout="fill"
              objectFit="cover"
              priority={true}
            />
            </a>
            <a className={`${styles["contenedor_informacion-imagen"]} ${styles.imagen_desktop}`}>
            <Image
              src={tecnologias[tech].imagenDesktop}
              alt={`Imagen del miembro ${tecnologias[tech].nombre}`}
              layout="fill"
              objectFit="cover"
              priority={true}
            />
              
            </a>
          <div className={styles["contenedor_informacion-general"]}>
            <nav className={styles["contenedor_informacion-navegacion"]}>
              {tecnologias.map(({ nombre }, index) => (
                <div
                  className={`${styles["contenedor_informacion-indicador"]} ${
                    tecnologias[tech].nombre ===
                    tecnologias[index].nombre
                      ? styles["contenedor_informacion-indicador-activo"]
                      : ""
                  }`}
                  key={nombre}
                  onClick={() => setTech(index)}
                >
                  {index + 1}
                </div>
              ))}
            </nav>
            <section className={styles.contenedor_textos}>
              <h2 className={styles["contenedor_informacion-nombre"]}>
                <span>The terminology...</span>{" "}
                {tecnologias[tech].nombre}
              </h2>
              <p className={styles["contenedor-informacion-descripcion"]}>
                {tecnologias[tech].descripcion}
              </p>
            </section>
          </div>
        </div>
      </section>
    </LayoutPrincipal>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const resp = await fetch(`${process.env.BACKEND_URL}/technologies`);
  const tecnologias:ITech[] = await resp.json();
  return {
    props: {
      tecnologias
    }
  }
}

export default TechonologyPage;
