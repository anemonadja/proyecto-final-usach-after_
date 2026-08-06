"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./galeriacss.module.css";

interface GaleriaProducto {
    id: number;
    title: string;
    image: string;
}

interface GaleriaProps {
    /** ID del producto de Fake Store API que se muestra en el bloque verde */
    productId?: number;
}

export default function Galeria({ productId = 1 }: GaleriaProps) {
    const [producto, setProducto] = useState<GaleriaProducto | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchProducto() {
            try {
                setIsLoading(true);
                const res = await fetch(
                    `https://fakestoreapi.com/products/${productId}`
                );

                if (!res.ok) {
                    throw new Error("No se pudo obtener el producto.");
                }

                const data: GaleriaProducto = await res.json();
                setProducto(data);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchProducto();
    }, [productId]);

    return (
        <section className={styles.galeria}>
            <div className={styles.contenedor}>

                {/* Imagen decorativa de fondo (queda detrás de la imagen principal) */}
                <div className={`${styles.item} ${styles.itemFondo}`}>
                    <Image
                        src="/assets/galeria-fondo.jpg"
                        alt="Imagen decorativa de fondo"
                        fill
                        className={styles.imagen}
                        sizes="(max-width: 768px) 90vw, 25vw"
                    />
                </div>

                {/* Imagen principal */}
                <div className={`${styles.item} ${styles.itemPrincipal}`}>
                    <Image
                        src="/assets/galeria-principal.jpg"
                        alt="Imagen principal de la galería"
                        fill
                        className={styles.imagen}
                        sizes="(max-width: 768px) 90vw, 42vw"
                    />
                    <p className={styles.caption}>
                        Reemplaza este texto por la descripción de la imagen.
                    </p>
                </div>

                {/* Imagen secundaria, a la derecha */}
                <div className={`${styles.item} ${styles.itemDerecha}`}>
                    <Image
                        src="/assets/galeria-derecha.jpg"
                        alt="Imagen secundaria de la galería"
                        fill
                        className={styles.imagen}
                        sizes="(max-width: 768px) 90vw, 24vw"
                    />
                    <p className={styles.caption}>
                        Reemplaza este texto por la descripción de la imagen.
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
                            className={styles.imagenProducto}
                            sizes="(max-width: 768px) 60vw, 15vw"
                        />
                    )}

                    {isLoading && (
                        <span className={styles.productoCargando}>...</span>
                    )}
                </Link>

                {/* Imagen inferior, la más ancha */}
                <div className={`${styles.item} ${styles.itemInferior}`}>
                    <Image
                        src="/assets/galeria-inferior.jpg"
                        alt="Imagen inferior de la galería"
                        fill
                        className={styles.imagen}
                        sizes="(max-width: 768px) 90vw, 47vw"
                    />
                    <p className={styles.caption}>
                        Reemplaza este texto por la descripción de la imagen.
                    </p>
                </div>

            </div>
        </section>
    );
}
