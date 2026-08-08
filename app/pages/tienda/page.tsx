"use client";
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
        image: "/assets/S8.png",
    },
    {
        title: "Nuevos lanzamientos",
        text: "Descubre las últimas incorporaciones a nuestro catálogo.",
        image: "/assets/S9.png",
    },
    {
        title: "Ofertas exclusivas",
        text: "Aprovecha descuentos únicos por tiempo limitado.",
        image: "/assets/S10.png",
    },
];

type SortOrder = "asc" | "desc" | null;

export default function TiendaPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("todos");
    const [sortOrder, setSortOrder] = useState<SortOrder>(null);
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

    const toggleSortOrder = () => {
        setSortOrder((prev) => {
            if (prev === null) return "desc";
            if (prev === "desc") return "asc";
            return null;
        });
        setCurrentPage(0);
    };

    const filteredProducts = products.filter((product) => {
        return selectedCategory === "todos" || product.category === selectedCategory;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOrder === "asc") return a.price - b.price;
        if (sortOrder === "desc") return b.price - a.price;
        return 0;
    });

    const totalPages = Math.max(
        1,
        Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE)
    );
    const paginatedProducts = sortedProducts.slice(
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

    const sortLabel =
        sortOrder === "asc"
            ? "Precio: menor a mayor"
            : sortOrder === "desc"
            ? "Precio: mayor a menor"
            : "Ordenar por precio";

    return (
        <main>
        {/* Hero */}
        <section
            className={styles.hero}
            style={{ backgroundImage: `url(${heroSlides[heroIndex].image})` }}
        >
            <div className={styles.heroOverlay} />
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
                className={`${styles.sortButton} ${
                sortOrder ? styles.sortButtonActive : ""
                }`}
                onClick={toggleSortOrder}
                aria-label={sortLabel}
                title={sortLabel}
            >
                <svg
                    className={`${styles.sortIcon} ${
                        sortOrder === "asc" ? styles.sortIconFlipped : ""
                    }`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2 3H14L9.5 8.5V13L6.5 11.5V8.5L2 3Z"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinejoin="round"
                    />
                </svg>
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
                    <button
                        className={styles.pageArrow}
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                        disabled={currentPage === 0}
                        aria-label="Página anterior"
                    >
                        ‹
                    </button>

                    <span className={styles.pageNumber}>
                        Página {currentPage + 1} de {totalPages}
                    </span>

                    <button
                        className={styles.pageArrow}
                        onClick={() =>
                            setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
                        }
                        disabled={currentPage === totalPages - 1}
                        aria-label="Página siguiente"
                    >
                        ›
                    </button>
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
