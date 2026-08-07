import styles from "./bienvenidacss.module.css";

export default function Bienvenida() {
    return (
        <section className={styles.bienvenida}>
            <h2 className={styles.bienvenida__titulo}>Creamos para inspirar</h2>

            <p className={styles.bienvenida__texto}>
                Una tienda pensada para reunir objetos, piezas y productos con identidad. 
                Explora propuestas originales creadas para acompañar tus espacios, expresar tu estilo y hacer especial lo cotidiano.
            </p>
        </section>
    );
}