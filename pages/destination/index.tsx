import { NextPage } from "next";
import Image from "next/image";
import LayoutPrincipal from "../../layouts/LayoutPrincipal";
import styles from "../../styles/Destination.module.css";
import { useState } from "react";
import { DICCIONARIO_INFORMACION_PLANETAS } from "../../utils";

const DestinationPage: NextPage = (): JSX.Element => {
  const [planeta, setPlaneta] = useState(0);
  
  return (
    <LayoutPrincipal>
      <section className={styles.contenedor_destination}>
        <h1 className={styles["contenedor_destination-titulo"]}>
          <span>01</span> Pick your destination
        </h1>
        <div className={styles.contenedor_informacion}>
          <div className={styles["contenedor_informacion-imagen"]}>
            <Image
              src={DICCIONARIO_INFORMACION_PLANETAS[planeta].imagen}
              alt={`Imagen del planeta: ${DICCIONARIO_INFORMACION_PLANETAS[planeta].nombre}`}
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
          <div className={styles["contenedor_informacion-general"]}>
            <nav
              className={styles["contenedor_informacion-general-navegacion"]}
            >
              {DICCIONARIO_INFORMACION_PLANETAS.map(({ nombre },index) => (
                <a
                  key={nombre}
                  className={
                    nombre === DICCIONARIO_INFORMACION_PLANETAS[planeta].nombre
                      ? styles[
                          "contenedor_informacion-general-navegacion_activo"
                        ]
                      : ""
                  }
                  onClick={() => setPlaneta(index)}
                >
                  {nombre}
                </a>
              ))}
            </nav>
            <h2 className={styles.nombre_planeta}>
              {DICCIONARIO_INFORMACION_PLANETAS[planeta].nombre}
            </h2>
            <p className={styles.descripcion_planeta}>
              {DICCIONARIO_INFORMACION_PLANETAS[planeta].descripcion}
            </p>
            <hr />
            <div className={styles.detalles_planeta}>
              <section className={styles["detalles_planeta-info"]}>
                <h3>Avg. Distance</h3>
                <p>{DICCIONARIO_INFORMACION_PLANETAS[planeta].distance}</p>
              </section>
              <section className={styles["detalles_planeta-info"]}>
                <h3>Est. Travel Time</h3>
                <p>{DICCIONARIO_INFORMACION_PLANETAS[planeta].travel}</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </LayoutPrincipal>
  );
};

export default DestinationPage;
