import styles from "./footercss.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <nav className={styles.navigation} aria-label="Enlaces del pie de página">
          <h2 className={styles.title}>¡Permanece al día a través de nuestras redes!</h2>

          <ul className={styles.linkList}>
            <li>
              <a href="#" className={styles.link}>
                Colaboraciones
              </a>
            </li>

            <li>
              <a href="#" className={styles.link}>
                Sitios amigos
              </a>
            </li>

            <li>
              <a href="#" className={styles.link}>
                Blog y actividades
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.socialNetworks}>
          <a
            href="https://www.facebook.com/"
            className={styles.socialLink}
            aria-label="Visitar Facebook"
          >
            <svg
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              className={styles.socialIcon}
            >
              <path
                d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v6h4v-6h3.5l.5-4h-4V9c0-.7.3-1 1-1Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/"
            className={styles.socialLink}
            aria-label="Visitar Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              className={styles.socialIcon}
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>

          <a
            href="https://www.youtube.com/"
            className={styles.socialLink}
            aria-label="Visitar YouTube"
          >
            <svg
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              className={styles.socialIcon}
            >
              <rect
                x="2.5"
                y="5"
                width="19"
                height="14"
                rx="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="m10 9 5 3-5 3V9Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className={styles.legal}>
          <p>Tienda Temporal © {currentYear}</p>
          <a href="https://www.tiendatemporal.cl">www.tiendatemporal.cl</a>
        </div>
      </div>
    </footer>
  );
}