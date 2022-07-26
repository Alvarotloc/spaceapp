import Image from "next/image";
import LayoutPrincipal from "../../layouts/LayoutPrincipal";
import styles from "../../styles/Crew.module.css";
import { useState } from "react";
import type { NextPage, GetStaticProps } from "next";
import type { CrewProps, ICrew } from "../../interfaces";

const CrewPage: NextPage<CrewProps> = ({crew}): JSX.Element => {
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
              {crew[crewMember].rol}
            </h2>
            <h3 className={styles["contenedor_informacion-nombre"]}>
              {crew[crewMember].nombre}
            </h3>
            <p className={styles["contenedor_informacion-bio"]}>
              {crew[crewMember].bio}
            </p>
            <nav className={styles["contenedor_informacion-selectores"]}>
              {crew.map((member, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCrewMember(index)}
                  className={
                    crew[index].nombre ===
                    crew[crewMember].nombre
                      ? styles["contenedor_informacion-selectores-activo"]
                      : ""
                  }
                />
              ))}
            </nav>
          </div>
          <div className={styles["contenedor_informacion-imagen"]}>
            <Image
              src={crew[crewMember].imagen}
              alt={`Imagen del miembro ${crew[crewMember].nombre}`}
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  const resp = await fetch(`${process.env.BACKEND_URL}/crews`);
  const crew:ICrew[] = await resp.json();
  return {
    props: {
      crew
    }
  }
}


export default CrewPage;
