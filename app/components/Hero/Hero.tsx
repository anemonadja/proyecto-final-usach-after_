"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./herocss.module.css";

interface Slide {
    image: string;
    title: string;
    subtitle: string;
    }

    const slides: Slide[] = [
    {
        image: "/assets/2.png",
        title: "Experiencias visuales y sensoriales",
        subtitle: "Explora nuestra colección de objetos de diseño.",
    },
    {
        image: "/assets/22.png",
        title: "Diseño que inspira",
        subtitle: "Descubre piezas únicas para ti.",
    },
    {
        image: "/assets/222.png",
        title: "Objetos únicos",
        subtitle: "Colecciones inspiradas en el arte.",
    },
    {
        image: "/assets/2222.png",
        title: "Hecho para destacar",
        subtitle: "Diseño, calidad y personalidad.",
    },
    ];

    export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        nextSlide();
        }, 6000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
        prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    return (
        <section className={styles.hero}>
        <div
            className={styles.slider}
            style={{
            transform: `translateX(-${currentSlide * 100}vw)`,
            }}
        >
            {slides.map((slide, index) => (
            <div className={styles.slide} key={index}>
                <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className={styles.image}
                />

                <div className={styles.overlay} />

                <div className={styles.content}>
                    <h1>{slide.title}</h1>
                    <p>{slide.subtitle}</p>

                    <Link href="/tienda" className="buttonFeatured">
                        Ver más
                    </Link>
                </div>
            </div>
            ))}
        </div>






        <button
            onClick={prevSlide}
            className={`${styles.arrow} ${styles.left}`}
        >
            ❮
        </button>

        <button
            onClick={nextSlide}
            className={`${styles.arrow} ${styles.right}`}
        >
            ❯
        </button>
        </section>
    );
}