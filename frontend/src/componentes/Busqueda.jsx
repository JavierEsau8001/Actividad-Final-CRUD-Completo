// src/components/Busqueda.jsx
import React, { useState } from 'react';
import '../styles/Busqueda.css';

export default function Busqueda({ onBuscar }) {
  const [criterio, setCriterio] = useState('');

  const manejarCambio = (e) => {
    setCriterio(e.target.value);
    onBuscar(e.target.value); //llama a la funcion para buscar
  };

  return (
  <div className="busqueda-wrapper">
    <div className="busqueda-container">
      <label htmlFor="busqueda-input"> Buscar 🔎: </label>
      <input
        id="busqueda-input"
        type="text"
        value={criterio}
        onChange={manejarCambio}
        placeholder="Ejemp: Nombre, Apellido, ID o Correo"
        className="busqueda-input"
      />
    </div>
  </div>
);
}
