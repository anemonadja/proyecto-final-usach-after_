# Anemona/Wabi

Proyecto final del curso **Front End USACH 2026**

Desarrollado por el grupo **Anemona/Wabi**, conformado por **Nadja Villarroel** y **Joceline Pizarro**.

## Descripción del proyecto

Este proyecto fue creado con **Next.js + React + TypeScript + CSS Modules**, y consiste en una plantilla de ecommerce orientada a creativos.

La plantilla se encuentra actualmente **en construcción** y está sujeta a cambios. Por el momento incluye:

- Componentes reutilizables.
- Páginas y navegación mediante `Link`.
- Una tienda implementada como un grid de cards, que consume datos desde la [Fake Store API](https://fakestoreapi.com/).

Durante el desarrollo tuvimos apoyo instruccional ocasional de IA (ChatGPT y Claude) para la comprensión y ejecución de la pauta del curso. Una vez completados esos hitos, nos apoyamos más en estas herramientas para completar contenidos del proyecto.

## Instrucciones de instalación

Este proyecto utiliza **Next.js**, **React**, **TypeScript** y **CSS Modules**.

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   ```

2. Ingresa a la carpeta del proyecto:
   ```bash
   cd proyecto-final-usach
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Resolución de conflictos

Durante el desarrollo del proyecto seguimos, en su mayoría, el flujo de trabajo solicitado en la pauta: creación de Pull Requests (PR) y uso de ramas para los distintos cambios. Sin embargo, cabe mencionar lo siguiente:

- Tenemos algunos commits realizados directamente en `main`, ya que el proyecto es de tamaño reducido y gran parte del desarrollo se realizó estando ambas integrantes trabajando juntas en el mismo lugar. Aun así, somos conscientes de que se debería trabajar siempre utilizando ramas para cualquier cambio.

- Tuvimos un problema con el deploy en **Vercel** relacionado con el uso de mayúsculas en los nombres de archivos `.module.css`. Vercel requiere que estos nombres estén en minúsculas, pero al cambiar las mayúsculas por minúsculas en los nombres de los archivos, **GitHub no registraba el cambio** (por tratarse solo de una diferencia de capitalización), por lo que Vercel seguía arrojando error en el build. Para solucionarlo, tuvimos que crear archivos nuevos con los nombres correctos en minúscula. El mismo problema y solución se aplicó para las imágenes utilizadas en el hero.

## URL de producción

🔗 [https://proyecto-final-usach-seven.vercel.app/](https://proyecto-final-usach-seven.vercel.app/)

## Desarrollo continuo

El proyecto seguirá recibiendo commits con el objetivo de completar la plantilla y su contenido, y hacerla aplicable a proyectos reales.

## DEMO-DAY

📅 **Fecha:** 8 de agosto de 2026

En este encuentro presencial mostraremos los detalles del proyecto, los avances logrados desde la entrega hasta la presentación, y comentaremos las mejoras potenciales a futuro.
