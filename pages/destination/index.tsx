import { NextPage } from "next";
import Image from "next/image";
import LayoutPrincipal from "../../layouts/LayoutPrincipal";
import styles from "../../styles/Destination.module.css";
import { useState } from "react";
import type { IDestination } from "../../interfaces";

const DestinationPage: NextPage = (): JSX.Element => {
  const [planeta, setPlaneta] = useState(0);
  const DICCIONARIO_INFORMACION_PLANETAS: IDestination[] = [
    {
      nombre: "Moon",
      imagen: "/assets/destination/image-moon.webp",
      descripcion:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 Km",
      travel: "3 days",
    },
    {
      nombre: "Mars",
      imagen: "/assets/destination/image-mars.webp",
      descripcion:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      nombre: "Europa",
      imagen: "/assets/destination/image-europa.webp",
      descripcion:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 year",
    },
    {
      nombre: "Titan",
      imagen: "/assets/destination/image-titan.webp",
      descripcion:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 year",
    },
  ];
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
