"use client";

import { useEffect, useState } from 'react'

function Slider() {
  const slides = [
    {
      id: 1,
      imagen: '/assets/1.jpg',
      titulo: 'Somos Wabi',
      subtitulo: 'Diseño estratégico para marcas que buscan crecer con identidad.',
    },
    {
      id: 2,
      imagen: '/assets/2.jpg',
      titulo: 'Branding con propósito',
      subtitulo: 'Construimos marcas memorables, coherentes y con personalidad.',
    },
    {
      id: 3,
      imagen: '/assets/3.jpg',
      titulo: 'Diseño digital',
      subtitulo: 'Desarrollamos experiencias visuales para web, redes sociales y campañas.',
    },
    {
      id: 4,
      imagen: '/assets/4.jpg',
      titulo: 'Creatividad que conecta',
      subtitulo: 'Ideas claras, diseño atractivo y soluciones enfocadas en resultados.',
    },
  ]

  const [slideActual, setSlideActual] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlideActual((indiceAnterior) =>
        indiceAnterior === slides.length - 1 ? 0 : indiceAnterior + 1,
      )
    }, 4000)

    return () => clearInterval(intervalo)
  }, [slides.length])

  const mostrarAnterior = () => {
    setSlideActual((indiceAnterior) =>
      indiceAnterior === 0 ? slides.length - 1 : indiceAnterior - 1,
    )
  }

  const mostrarSiguiente = () => {
    setSlideActual((indiceAnterior) =>
      indiceAnterior === slides.length - 1 ? 0 : indiceAnterior + 1,
    )
  }

  const slide = slides[slideActual]

  return (
    <section className="slider">
      <img
        className="slider__imagen"
        src={slide.imagen}
        alt={`Diapositiva sobre ${slide.titulo.toLowerCase()}`}
      />

      <div className="slider__capa"></div>

      <button
        className="slider__flecha slider__flecha--anterior"
        type="button"
        onClick={mostrarAnterior}
        aria-label="Mostrar imagen anterior"
      >
        ‹
      </button>

      <div className="slider__contenido">
        <h1 className="slider__titulo">{slide.titulo}</h1>
        <p className="slider__subtitulo">{slide.subtitulo}</p>

        <div className="slider__indicadores">
          {slides.map((item, indice) => (
            <button
              className={`slider__indicador ${
                indice === slideActual ? 'slider__indicador--activo' : ''
              }`}
              type="button"
              key={item.id}
              onClick={() => setSlideActual(indice)}
              aria-label={`Mostrar diapositiva ${indice + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <button
        className="slider__flecha slider__flecha--siguiente"
        type="button"
        onClick={mostrarSiguiente}
        aria-label="Mostrar imagen siguiente"
      >
        ›
      </button>
    </section>
  )
}

export default Slider