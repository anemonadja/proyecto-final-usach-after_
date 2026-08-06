"use client";

import { useState, FormEvent, ChangeEvent } from 'react';
import styles from './formulariocss.module.css';

const ASUNTOS = [
    'CONSULTA',
    'COTIZACIÓN DE CUSTOMIZACIÓN',
    'PEDIDO ESPECIAL',
    'PETICIÓN DE COLABORACIÓN',
    'PROBLEMA CON EL PAGO O ENVÍO',
];

const MAX_MENSAJE = 500;

// Convierte "juan perez" -> "Juan Perez"
function capitalizarPalabras(texto: string): string {
  return texto
    .split(' ')
    .map((palabra) =>
      palabra.length > 0
        ? palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
        : palabra
    )
    .join(' ');
}

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleNombreChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Solo letras (incluye tildes/ñ) y espacios
    const limpio = e.target.value.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿñÑ\s]/g, '');
    setNombre(capitalizarPalabras(limpio));
  };

  const handleCorreoChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Solo minúsculas, números y . - _ @
    const limpio = e.target.value
      .toLowerCase()
      .replace(/[^a-z0-9.\-_@]/g, '');
    setCorreo(limpio);
  };

  const handleAsuntoChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAsunto(e.target.value);
  };

  const handleMensajeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // Letras, números, espacios y . @ - _ ! ?
    const limpio = e.target.value
      .replace(/[^a-zA-ZÀ-ÖØ-öø-ÿñÑ0-9\s.@\-_!?]/g, '')
      .slice(0, MAX_MENSAJE);
    setMensaje(limpio);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!nombre.trim() || !correo.trim() || !asunto || !mensaje.trim()) {
      return;
    }

    // Aquí iría el envío real (fetch a una API, servicio de email, etc.)
    console.log({ nombre, correo, asunto, mensaje });
    setEnviado(true);
  };

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <div className={styles.campo}>
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={handleNombreChange}
          placeholder="escribe tu nombre"
          required
        />
      </div>

      <div className={styles.campo}>
        <label htmlFor="correo">Correo</label>
        <input
          id="correo"
          type="email"
          value={correo}
          onChange={handleCorreoChange}
          placeholder="correo@electronico.com"
          required
        />
      </div>

      <div className={styles.campo}>
        <label htmlFor="asunto">Asunto</label>
        <select
          id="asunto"
          value={asunto}
          onChange={handleAsuntoChange}
          required
        >
          <option value="" disabled>
            Selecciona un asunto
          </option>
          {ASUNTOS.map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.campo}>
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          value={mensaje}
          onChange={handleMensajeChange}
          placeholder="escribe tu mensaje"
          rows={6}
          required
        />
        <span className={styles.contador}>
          {mensaje.length}/{MAX_MENSAJE}
        </span>
      </div>

      <button type="submit" className={styles.boton}>
        Enviar
      </button>

      {enviado && (
        <p className={styles.exito}>¡Mensaje enviado correctamente!</p>
      )}
    </form>
  );
}