import { NextPage } from "next";
import Image from "next/image";
import LayoutPrincipal from "../../layouts/LayoutPrincipal";
import styles from "../../styles/Crew.module.css";
import { useState } from "react";
import { DICCIONARIO_CREW } from "../../utils";

const CrewPage: NextPage = (): JSX.Element => {
  const [crewMember, setCrewMember] = useState<number>(0);
  return (
    <LayoutPrincipal>
      <section className={styles.contenedor_crew}>
        <h1 className={styles["contenedor_crew-titulo"]}>
          <span>02</span> Meet your crew
        </h1>
        <div className={styles.contenedor_informacion}>
          <div className={styles["contenedor_informacion-general"]}>
            <h2 className={styles["contenedor_informacion-rol"]}>
              {DICCIONARIO_CREW[crewMember].rol}
            </h2>
            <h3 className={styles["contenedor_informacion-nombre"]}>
              {DICCIONARIO_CREW[crewMember].nombre}
            </h3>
            <p className={styles["contenedor_informacion-bio"]}>
              {DICCIONARIO_CREW[crewMember].bio}
            </p>
            <nav className={styles["contenedor_informacion-selectores"]}>
              {DICCIONARIO_CREW.map((member, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCrewMember(index)}
                  className={
                    DICCIONARIO_CREW[index].nombre ===
                    DICCIONARIO_CREW[crewMember].nombre
                      ? styles["contenedor_informacion-selectores-activo"]
                      : ""
                  }
                />
              ))}
            </nav>
          </div>
          <div className={styles["contenedor_informacion-imagen"]}>
            <Image
              src={DICCIONARIO_CREW[crewMember].imagen}
              alt={`Imagen del miembro ${DICCIONARIO_CREW[crewMember].nombre}`}
              layout="fill"
              objectFit="scale-down"
              priority={true}
              objectPosition="bottom"
            />
            <hr />
          </div>
        </div>
      </section>
    </LayoutPrincipal>
  );
};

export default CrewPage;
