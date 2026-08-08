"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./galeriacss.module.css";
import productsData from "@/app/data/products.json";

interface GaleriaProducto {
    id: number;
    title: string;
    image: string;
}

interface GaleriaProps {
    /** ID del producto (de tu products.json) que se muestra en el bloque destacado */
    productId?: number;
}

export default function Galeria({ productId = 1 }: GaleriaProps) {
    const [producto, setProducto] = useState<GaleriaProducto | null>(null);

    useEffect(() => {
        const data = productsData as GaleriaProducto[];
        const found = data.find((p) => p.id === productId);
        setProducto(found ?? null);
    }, [productId]);

    return (
        <section className={styles.galeria}>
            <div className={styles.contenedor}>

                {/* Imagen decorativa de fondo (queda detrás de la imagen principal) */}
                <div className={`${styles.item} ${styles.itemFondo}`}>
                    <Image
                        src="/assets/g7.png"
                        alt="Imagen decorativa de fondo"
                        fill
                        className={styles.imagen}
                        sizes="(max-width: 768px) 90vw, 25vw"
                    />
                </div>

                {/* Imagen principal */}
                <div className={`${styles.item} ${styles.itemPrincipal}`}>
                    <Image
                        src="/assets/g1.png"
                        alt="Imagen principal de la galería"
                        fill
                        className={styles.imagen}
                        sizes="(max-width: 768px) 90vw, 42vw"
                    />
                    <p className={styles.caption}>
                    </p>
                </div>

                {/* Imagen secundaria, a la derecha */}
                <div className={`${styles.item} ${styles.itemDerecha}`}>
                    <Image
                        src="/assets/g2.png"
                        alt="Imagen secundaria de la galería"
                        fill
                        className={styles.imagen}
                        sizes="(max-width: 768px) 90vw, 24vw"
                    />
                    <p className={styles.caption}>
                    </p>
                </div>

                {/* Producto destacado (bloque verde del wireframe), enlaza a la ficha del producto */}

                <Link
                    href={producto ? `/pages/tienda/producto/${producto.id}` : "#"}
                    className={`${styles.item} ${styles.itemProducto}`}
                    aria-label={producto ? producto.title : "Producto destacado"}
                    >
                    {producto && (
                        <Image
                        src={producto.image}
                        alt={producto.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={styles.imagenProducto}
                        />
                    )}
                </Link>

                {/* Imagen inferior, la más ancha */}
                <div className={`${styles.item} ${styles.itemInferior}`}>
                    <Image
                        src="/assets/g3.png"
                        alt="Imagen inferior de la galería"
                        fill
                        className={styles.imagen}
                        sizes="(max-width: 800px) 90vw, 47vw"
                    />
                    <p className={styles.caption}>
                    </p>
                </div>

            </div>
        </section>
    );
}
