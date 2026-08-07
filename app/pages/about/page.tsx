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
                  src="/assets/perfil.png"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </p>
          </div>

          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
              Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
              efficitur neque.
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
