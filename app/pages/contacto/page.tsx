import type { Metadata } from 'next';
import Head from 'next/head';
import Formulario from '../../components/Formulario/Formulario';
import styles from './contacto.module.css';

export const metadata: Metadata = {
title: 'Contacto | Plantilla e-commerce para creativos',
description: 'Para más información, contáctanos a través de nuestro formulario o redes sociales.'
};

export default function Contacto() {
    return (
        <>
        <Head>
            <title>Contacto</title>
        </Head>
        <main className={styles.container}>
            <h1 className={styles.titulo}>Contáctanos</h1>
            <p className={styles.descripcion}>
            ¿Tienes alguna duda, pedido especial o propuesta de colaboración?
            Escríbenos y te responderemos lo antes posible.
            </p>
            <Formulario />
        </main>
        </>
    );
}