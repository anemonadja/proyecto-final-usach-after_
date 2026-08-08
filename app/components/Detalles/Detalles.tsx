import Image from "next/image";
import Link from "next/link";
import styles from "./detallescss.module.css";

export interface DetalleItem {
    icon: React.ReactNode;
    title: string;
    text: string;
    }

    interface DetallesProps {
    heading?: string;
    centerImage: string;
    centerImageAlt: string;
    leftItems: DetalleItem[];
    rightItems: DetalleItem[];
    ctaText?: string;
    }

    export default function Detalles({
    heading,
    centerImage,
    centerImageAlt,
    leftItems,
    rightItems,
    ctaText = "Contáctame para pedidos especiales",
    }: DetallesProps) {
    return (
        <section className={styles.wrapper}>
        {heading && <h2 className={styles.heading}>{heading}</h2>}

        <div className={styles.content}>
            <div className={styles.column}>
            {leftItems.map((item, index) => (
                <div key={index} className={styles.item}>
                <span className={styles.icon}>{item.icon}</span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemText}>{item.text}</p>
                </div>
            ))}
            </div>

            <div className={styles.imageWrapper}>
            <Image
                src={centerImage}
                alt={centerImageAlt}
                fill
                className={styles.image}
            />
            </div>

            <div className={styles.column}>
            {rightItems.map((item, index) => (
                <div key={index} className={styles.item}>
                <span className={styles.icon}>{item.icon}</span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemText}>{item.text}</p>
                </div>
            ))}
            </div>
        </div>

        <Link href="/pages/contacto" className={`buttonFeatured ${styles.cta}`}>
            {ctaText}
        </Link>
        </section>
    );
}