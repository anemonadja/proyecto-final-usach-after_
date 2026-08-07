import styles from "./bienvenidacss.module.css";

export default function Bienvenida() {
    return (
        <section className={styles.bienvenida}>
            <h2 className={styles.bienvenida__titulo}>Somos Tienda Temporal</h2>

            <p className={styles.bienvenida__texto}>
                Estudio creativo especializado en diseño gráfico, comunicación audiovisual, diseño web, 
                branding y marketing digital.
            </p>
        </section>
    );
}