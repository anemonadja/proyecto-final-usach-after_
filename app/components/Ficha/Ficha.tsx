"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./fichacss.module.css";
import productsData from "@/app/data/products.json";
import { formatCLP } from "@/app/utils/formatPrice";

interface ProductDetail {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    images: string[];
}

interface FichaProps {
    id: string;
}

// TODO: cuando manejes variantes reales (materiales, colores, etc.),
// mueve esta info al JSON de cada producto en vez de usar un mock fijo.
const MOCK_VARIANTS = ["Material 1", "Material 2"];

export default function Ficha({ id }: FichaProps) {
    const [product, setProduct] = useState<ProductDetail | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedVariant, setSelectedVariant] = useState(MOCK_VARIANTS[0]);

    useEffect(() => {
        if (!id) {
            setError("No se especificó un producto válido.");
            return;
        }

        const data = productsData as ProductDetail[];
        const found = data.find((p) => p.id === Number(id));

        if (!found) {
            setError("El producto no existe.");
            return;
        }

        setProduct(found);
        setSelectedImage(0);
        setError(null);
    }, [id]);

    if (error || !product) {
        return (
        <p className={styles.statusText}>
            {error ?? "No encontramos este producto."}
        </p>
        );
    }

    // Si el producto solo tiene "image" y no "images" cargado en el JSON,
    // usamos esa única foto como galería de un solo elemento.
    const gallery =
        product.images && product.images.length > 0
            ? product.images
            : [product.image];

    return (
        <div className={styles.wrapper}>
            <Link href="/pages/tienda" className={styles.backLink}>
                ← Volver a la tienda
            </Link>

            <div className={styles.content}>
                <div className={styles.gallery}>
                    <div className={styles.thumbnails}>
                        {gallery.map((thumb, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`${styles.thumbnail} ${
                            selectedImage === index ? styles.thumbnailActive : ""
                            }`}
                            onClick={() => setSelectedImage(index)}
                            aria-label={`Ver imagen ${index + 1} de ${product.title}`}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={thumb} alt="" />
                        </button>
                    ))}
                    </div>

                    <div className={styles.mainImageWrapper}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                        src={gallery[selectedImage]}
                        alt={product.title}
                        className={styles.mainImage}
                        />
                    </div>
                </div>

                <div className={styles.info}>
                    <h2>{product.title}</h2>
                    <p className={styles.price}>{formatCLP(product.price)}</p>
                    <p className={styles.description}>{product.description}</p>
                    
                    <div className={styles.variants}>
                        {MOCK_VARIANTS.map((variant) => (
                        <button
                            key={variant}
                            type="button"
                            className={`${styles.variantPill} ${
                            selectedVariant === variant ? styles.variantPillActive : ""
                            }`}
                            onClick={() => setSelectedVariant(variant)}
                        >
                        {variant}
                        </button>
                    ))}
                    </div>
                    
                    {/* cambiar por la URL del checkout/carro real. */}
                    <Link
                        href="https://mpago.la/17pbQPt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buttonFeatured"
                    >
                        Comprar
                    </Link>
                </div>
            </div>
        </div>
    );
}
