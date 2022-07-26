import type { IDestination, DestinationProps } from '../../interfaces/index';
import type { NextPage,GetStaticProps } from "next";
import Image from "next/image";
import LayoutPrincipal from "../../layouts/LayoutPrincipal";
import styles from "../../styles/Destination.module.css";
import { useState } from "react";

const DestinationPage: NextPage<DestinationProps> = ({planetas}): JSX.Element => {
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
              src={planetas[planeta].imagen}
              alt={`Imagen del planeta: ${planetas[planeta].nombre}`}
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
          <div className={styles["contenedor_informacion-general"]}>
            <nav
              className={styles["contenedor_informacion-general-navegacion"]}
            >
              {planetas.map(({ nombre },index) => (
                <a
                  key={nombre}
                  className={
                    nombre === planetas[planeta].nombre
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
              {planetas[planeta].nombre}
            </h2>
            <p className={styles.descripcion_planeta}>
              {planetas[planeta].descripcion}
            </p>
            <hr />
            <div className={styles.detalles_planeta}>
              <section className={styles["detalles_planeta-info"]}>
                <h3>Avg. Distance</h3>
                <p>{planetas[planeta].distance}</p>
              </section>
              <section className={styles["detalles_planeta-info"]}>
                <h3>Est. Travel Time</h3>
                <p>{planetas[planeta].travel}</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </LayoutPrincipal>
  );
};


export const getStaticProps: GetStaticProps = async (ctx) => {
  const resp = await fetch(`${process.env.BACKEND_URL}/planetas`);
  const planetas:IDestination[] = await resp.json();
  return {
    props: {
      planetas
    }
  }
}

export default DestinationPage;
