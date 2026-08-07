import Link from "next/link";
import styles from "./ctacss.module.css";

export default function CTA() {
    return (
        <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>
            ¿No encontraste lo que buscabas?
        </h2>

        <p className={styles.ctaText}>
            Escríbenos y te ayudamos a encontrar el producto ideal para ti.
        </p>

        <Link href="/pages/contacto" className="buttonFeatured">
            Contáctanos
        </Link>
        </section>
    );
}