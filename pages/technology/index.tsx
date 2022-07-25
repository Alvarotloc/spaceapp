import { NextPage } from "next";
import Image from "next/image";
import LayoutPrincipal from "../../layouts/LayoutPrincipal";
import styles from "../../styles/Technology.module.css";
import { DICCIONARIO_TECHNOLOGY } from "../../utils/index";
import { useState } from "react";

const TechonologyPage: NextPage = (): JSX.Element => {
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
              src={DICCIONARIO_TECHNOLOGY[tech].imagen}
              alt={`Imagen del miembro ${DICCIONARIO_TECHNOLOGY[tech].nombre}`}
              layout="fill"
              objectFit="cover"
              priority={true}
            />
            </a>
            <a className={`${styles["contenedor_informacion-imagen"]} ${styles.imagen_desktop}`}>
            <Image
              src={DICCIONARIO_TECHNOLOGY[tech].imagenDesktop}
              alt={`Imagen del miembro ${DICCIONARIO_TECHNOLOGY[tech].nombre}`}
              layout="fill"
              objectFit="cover"
              priority={true}
            />
              
            </a>
          <div className={styles["contenedor_informacion-general"]}>
            <nav className={styles["contenedor_informacion-navegacion"]}>
              {DICCIONARIO_TECHNOLOGY.map(({ nombre }, index) => (
                <div
                  className={`${styles["contenedor_informacion-indicador"]} ${
                    DICCIONARIO_TECHNOLOGY[tech].nombre ===
                    DICCIONARIO_TECHNOLOGY[index].nombre
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
                {DICCIONARIO_TECHNOLOGY[tech].nombre}
              </h2>
              <p className={styles["contenedor-informacion-descripcion"]}>
                {DICCIONARIO_TECHNOLOGY[tech].descripcion}
              </p>
            </section>
          </div>
        </div>
      </section>
    </LayoutPrincipal>
  );
};

export default TechonologyPage;
