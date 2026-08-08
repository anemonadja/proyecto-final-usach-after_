import Image from "next/image";
import styles from "./aboutcss.module.css";
import Cta from "../../components/Cta/Cta";

export default function About() {
  return (
    <>
      <section className={styles.about} aria-labelledby="about-title">
        <div className={styles.aboutGrid}>
          <div className={styles.imagePlaceholder}>
              <Image
                  src="/assets/perfil1.jpg"
                  alt="Fotografía de Wild Ríos"
                  fill
                  sizes="(max-width: 768px) 50vw, 500px"
                  className={styles.profileImage}
                  priority
              />
          </div>

          <div className={styles.introduction}>
            <h3 id="about-title" className={styles.title}>
              Wild Ríos
            </h3>

            <p className={styles.profession}>
              <em>Artista 3D</em>
            </p>

            <p>
              Artista visual y diseñador 3D. Su trabajo explora el encuentro entre tecnología, cuerpo y ornamentación mediante joyas digitales de formas orgánicas, inspiradas en la naturaleza, la arquitectura y los imaginarios del futuro.
            </p>
          </div>

          <div className={styles.description}>
            <p>
              Su proceso comienza con dibujos, fotografías y pequeños objetos encontrados que luego transforma mediante modelado e impresión 3D. Cada pieza se desarrolla como una escultura portátil, combinando experimentación digital, materiales reciclados y terminaciones realizadas a mano. Sus colecciones buscan cuestionar los límites entre arte, diseño y tecnología, proponiendo nuevas maneras de relacionarnos con los objetos que llevamos sobre el cuerpo. Actualmente desarrolla piezas por encargo, colaboraciones con artistas escénicos y colecciones de edición limitada desde su estudio en Santiago de Chile.
            </p>
          </div>

          <div className={styles.contact}>
            <p aria-hidden="true">-</p>

            <p>
              <strong>
                <a href="https://www.instagram.com/estudio_temporal/">
                  @wildrios
                </a>

                <br />

                <a href="mailto:wildrios@gmail.com">
                  wildrios@gmail.com
                </a>
              </strong>
            </p>
          </div>

        </div>
      </section>

      <Cta />
    </>
  );
}
