import Image from "next/image";
import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <main className={styles.wrapper}>
        <div className={styles.imageWrapper}>
            <Image
            src="/assets/notfound.jpg"
            alt="Página no encontrada"
            fill
            className={styles.image}
            />
        </div>

        <h1 className={styles.title}>404</h1>
        <p className={styles.text}>
            No encontramos la página que buscas.
        </p>
        <Link href="/" className="buttonFeatured">
            Volver al inicio
        </Link>
        </main>
    );
}