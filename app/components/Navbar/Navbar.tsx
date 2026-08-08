"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbarcss.module.css";

export default function Navbar() {
    const [menuAbierto, setMenuAbierto] = useState(false)

    const alternarMenu = () => {
    setMenuAbierto((estadoAnterior) => !estadoAnterior)
    }

    const cerrarMenu = () => {
    setMenuAbierto(false)
    }

    return (
        <header className={styles.menu}>
            <nav className={styles.menu__contenedor}>
                
                <Link className={styles.menu__logo} href="/" onClick={cerrarMenu}>
                    <div className={styles["menu__logo-swap"]}>
                        <Image
                            className={styles["menu__logo-imagen"]}
                            src="/assets/logo_black.png" 
                            alt="Logo Tienda"
                            width={140}
                            height={50}
                            />
                        <span className={styles.menu__marca}>tienda_temporal</span>
                    </div>
                </Link>

                <ul
                    id="menu-principal"
                    className={`${styles.menu__lista} ${
                    menuAbierto ? styles["menu__lista--abierta"] : ""}`}
                >
                    <li className={styles.menu__item}>
                        <Link className={styles.menu__enlace} href="/" onClick={cerrarMenu}>
                            HOME
                        </Link>
                    </li>

                    <li className={styles.menu__item}>
                        <Link className={styles.menu__enlace} href="/pages/about" onClick={cerrarMenu}>
                            QUIÉNES SOMOS
                        </Link>
                    </li>

                    <li className={styles.menu__item}>
                        <Link className={styles.menu__enlace} href="/pages/tienda" onClick={cerrarMenu}>
                            TIENDA
                        </Link>
                    </li>
                

                {/*sólo visible en mobile*/}
                    <li className={`${styles.menu__item} ${styles["menu__item--mobile"]}`}>
                        <Link className={styles.menu__enlace} href="/pages/contacto" onClick={cerrarMenu}>
                        CONTACTO
                        </Link>
                    </li>
                </ul>

                {/*sólo visible en desktop*/}
                <div className={styles.menu__contacto}>
                    <Link className={styles.menu__enlace} href="/pages/contacto">
                        CONTACTO
                    </Link>
                </div>

                <button
                className={`${styles.menu__boton} ${
                menuAbierto ? styles["menu__boton--activo"] : ""}`}
                    type="button"
                    onClick={alternarMenu}
                    aria-label="Abrir o cerrar menú"
                    aria-expanded={menuAbierto}
                    aria-controls="menu-principal"
                >
                    <span className={styles.menu__linea}></span>
                    <span className={styles.menu__linea}></span>
                    <span className={styles.menu__linea}></span>
                </button>
            </nav>
        </header>
    );
}
