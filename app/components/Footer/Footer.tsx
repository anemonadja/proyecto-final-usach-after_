import styles from "./footercss.module.css";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <nav className={styles.navigation} aria-label="Enlaces del pie de página">
          <h3 className={styles.title} >¡Permanece al día a través de nuestras redes!</h3>

          <ul className={styles.linkList}>
            <li>
              <Link href="#" className={styles.link}>
                Colaboraciones
              </Link>
            </li>

            <li>
              <Link href="#" className={styles.link}>
                Sitios amigos
              </Link>
            </li>

            <li>
              <Link href="#" className={styles.link}>
                Blog y actividades
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.socialNetworks}>
          <Link
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
          </Link>

          <Link
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
          </Link>

          <Link
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
          </Link>
        </div>

        <div className={styles.legal}>
          <p>Tienda Temporal © {currentYear}</p>
          <Link className={styles.legal} href="https://www.tiendatemporal.cl">www.tiendatemporal.cl</Link>
        </div>
      </div>
    </footer>
  );
}