import type { NextPage } from "next";
import LayoutPrincipal from "../layouts/LayoutPrincipal";
import styles from "../styles/Home.module.css";

const HomePage: NextPage = (): JSX.Element => {
  return (
    <LayoutPrincipal>
      <section className={styles.contenedor_home}>
        <div className={styles.contenedor_info}>
          <h1 className={styles['contenedor_info-titulo']}>
            So, you want to travel to <span>space</span>
          </h1>
          <p className={styles['contenedor_info-desc']}>
            Let’s face it; if you want to go to space, you might as well genuinely
            go to outer space and not hover kind of on the edge of it. Well sit
            back, and relax because we’ll give you a truly out of this world
            experience!
          </p>
        </div>
        <div className={styles.boton_explorar}>Explore</div>

      </section>
      {/* <section className={styles.contenedor_home}>
      </section> */}
    </LayoutPrincipal>
  );
};

export default HomePage;
