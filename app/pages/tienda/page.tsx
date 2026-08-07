"use client";
import type { Metadata } from 'next';
import { useEffect, useState } from "react";
import Link from 'next/link';
import ProductCard from "@/app/components/productCard/ProductCard"
import styles from "./page.module.css";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

const PRODUCTS_PER_PAGE = 12;

const heroSlides = [
    {
        title: "Encuentra tu estilo",
        text: "Explora nuestra colección completa de productos, pensada para cada ocasión.",
    },
    {
        title: "Nuevos lanzamientos",
        text: "Descubre las últimas incorporaciones a nuestro catálogo.",
    },
    {
        title: "Ofertas exclusivas",
        text: "Aprovecha descuentos únicos por tiempo limitado.",
    },
];

/*ESTA PARTE NO SE VISUALIZARÁ PORQUE SE ESTÁ USANDO EL METADATA DE LA PÁGINA LAYOUT, 
PERO SE DEJA POR SI SE QUIERE USAR EN EL FUTURO

export const metadata: Metadata = {
title: 'Tienda - Plantilla e-commerce para creativos',
description: 'Explora nuestro catálogo completo de productos'
};

*/

export default function TiendaPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("todos");
    const [favorites, setFavorites] = useState<Set<number>>(new Set());
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [heroIndex, setHeroIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                setError(null);

        const [productsRes, categoriesRes] = await Promise.all([
            fetch("https://fakestoreapi.com/products"),
            fetch("https://fakestoreapi.com/products/categories"),
            ]);

            if (!productsRes.ok || !categoriesRes.ok) {
            throw new Error("No se pudo obtener la información de la tienda.");
            }

        const productsData: Product[] = await productsRes.json();
        const categoriesData: string[] = await categoriesRes.json();

                setProducts(productsData);
                setCategories(categoriesData);
                } catch (err) {
                    setError(
                    err instanceof Error ? err.message : "Ocurrió un error inesperado."
                    );
                } finally {
                    setIsLoading(false);
                }
        }

    fetchData();
    }, []);

    const toggleFavorite = (id: number) => {
        setFavorites((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
            next.delete(id);
        } else {
            next.add(id);
        }
        return next;
        });
    };

    const filteredProducts = products.filter((product) => {
        const matchesCategory =
        selectedCategory === "todos" || product.category === selectedCategory;
        const matchesFavorite = !showOnlyFavorites || favorites.has(product.id);
        return matchesCategory && matchesFavorite;
    });

    const totalPages = Math.max(
        1,
        Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
    );
    const paginatedProducts = filteredProducts.slice(
        currentPage * PRODUCTS_PER_PAGE,
        currentPage * PRODUCTS_PER_PAGE + PRODUCTS_PER_PAGE
    );

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(0);
    };

    const handlePrevHero = () => {
        setHeroIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    };

    const handleNextHero = () => {
        setHeroIndex((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    };

    return (
        <main>
        {/* Hero */}
        <section className={styles.hero}>
            <button
            className={`${styles.heroArrow} ${styles.heroArrowLeft}`}
            onClick={handlePrevHero}
            aria-label="Banner anterior"
            >
            ‹
            </button>
            
            <div className={styles.heroContent}>
                <h2 className={styles.heroTitle} >{heroSlides[heroIndex].title}</h2>
                <p className={styles.heroText}>{heroSlides[heroIndex].text}</p>
                <button className="buttonFeatured">Ver productos</button>
            </div>
    
            <button
            className={`${styles.heroArrow} ${styles.heroArrowRight}`}
            onClick={handleNextHero}
            aria-label="Siguiente banner"
            >
            ›
            </button>
        </section>
    
        {/* Catálogo */}
        <section className={styles.shop}>
            <h2 className={styles.shopTitle}>Todos nuestros productos</h2>
            <p className={styles.shopText}>
            Explora nuestro catálogo completo, filtra por categoría y encuentra
            exactamente lo que buscas.
            </p>
    
            <div className={styles.filters}>
            <button
                className={`${styles.filterPill} ${
                selectedCategory === "todos" ? styles.filterPillActive : ""
                }`}
                onClick={() => handleCategoryClick("todos")}
            >
                Todos
            </button>
    
            {categories.map((category) => (
                <button
                key={category}
                className={`${styles.filterPill} ${
                    selectedCategory === category ? styles.filterPillActive : ""
                }`}
                onClick={() => handleCategoryClick(category)}
                >
                {category}
                </button>
            ))}
    
            <button
                className={`${styles.favoriteFilter} ${
                showOnlyFavorites ? styles.favoriteFilterActive : ""
                }`}
                onClick={() => {
                setShowOnlyFavorites((prev) => !prev);
                setCurrentPage(0);
                }}
                aria-label="Mostrar solo favoritos"
            >
                {showOnlyFavorites ? "♥" : "♡"}
            </button>
            </div>
    
            {isLoading && (
            <p className={styles.statusText}>Cargando productos...</p>
            )}
            {error && <p className={styles.statusText}>{error}</p>}
    
            {!isLoading && !error && (
            <>
                <div className={styles.grid}>
                {paginatedProducts.map((product) => (
                    <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    isFavorite={favorites.has(product.id)}
                    onToggleFavorite={toggleFavorite}
                    />
                ))}
                </div>
    
                {paginatedProducts.length === 0 && (
                <p className={styles.statusText}>
                    No encontramos productos con estos filtros.
                </p>
                )}
    
                {totalPages > 1 && (
                <div className={styles.pagination}>
                    {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${
                        currentPage === index ? styles.dotActive : ""
                        }`}
                        onClick={() => setCurrentPage(index)}
                        aria-label={`Ir a la página ${index + 1}`}
                    />
                    ))}
                </div>
                )}
            </>
            )}
        </section>
    
        {/* CTA */}
        <section className={styles.cta}>
            <h2 className={styles.ctaTitle}>¿No encontraste lo que buscabas?</h2>
            <p className={styles.ctaText}>
            Escríbenos y te ayudamos a encontrar el producto ideal para ti.
            </p>
            <Link href="/pages/contacto" className="buttonFeatured">
                Contáctanos
            </Link>
        </section>
        </main>
    );
}

