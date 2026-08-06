"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./fichacss.module.css";

interface ProductDetail {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    }

    interface FichaProps {
    id: string;
    }

    // La Fake Store API solo entrega UNA imagen y no maneja variantes por producto.
    // Para respetar el diseño (miniaturas + selector de materiales) generamos data
    // de apoyo aquí. Cuando el backend real entregue varias fotos/variantes,
    // reemplaza "gallery" y "MOCK_VARIANTS" por esos datos.
    const MOCK_VARIANTS = ["Material 1", "Material 2"];

    export default function Ficha({ id }: FichaProps) {
    const [product, setProduct] = useState<ProductDetail | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedVariant, setSelectedVariant] = useState(MOCK_VARIANTS[0]);

    useEffect(() => {
        async function fetchProduct() {
        // Si "id" llega vacío o inválido (por ejemplo undefined), evitamos
        // pegarle a la API con una URL rota como ".../products/undefined".
        if (!id) {
            setError("No se especificó un producto válido.");
            setIsLoading(false);
            return;
        }

        try {
            setIsLoading(true);
            setError(null);

            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            const rawText = await res.text();

            if (!res.ok) {
            throw new Error("No se pudo obtener la información del producto.");
            }

            if (!rawText) {
            throw new Error("El producto no existe o la API no devolvió datos.");
            }

            const data: ProductDetail = JSON.parse(rawText);

            if (!data || !data.id) {
            throw new Error("El producto no existe.");
            }

            setProduct(data);
        } catch (err) {
            setError(
            err instanceof Error ? err.message : "Ocurrió un error inesperado."
            );
        } finally {
            setIsLoading(false);
        }
        }

        fetchProduct();
    }, [id]);

    if (isLoading) {
        return <p className={styles.statusText}>Cargando producto...</p>;
    }

    if (error || !product) {
        return (
        <p className={styles.statusText}>
            {error ?? "No encontramos este producto."}
        </p>
        );
    }

    // Placeholder: repetimos la única imagen real para poblar la columna de
    // miniaturas del diseño. Sustituir por el arreglo real cuando exista.
    const gallery = [
        product.image,
        product.image,
        product.image,
        product.image,
        product.image,
    ];

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
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.price}>${product.price.toFixed(2)}</p>

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

            {/* El botón Comprar es un enlace; cámbialo por la URL de tu
                checkout/carro real cuando la tengas. */}
            <Link href="/contacto" className={styles.buyButton}>
                Comprar
            </Link>
            </div>
        </div>
        </div>
    );
}
