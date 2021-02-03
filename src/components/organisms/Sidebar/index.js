import React from 'react';
import Filter from '../../molecules/Filter';
import './App.scss';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <h1>Zapatillas</h1>
      <h2>Filtrar</h2>
      <Filter title="Categoría" categories={["Zapatillas", "Zapatos", "Botas", "Sandalias", "Pantuflas"]} />
      <Filter title="Talle" categories={["36", "38", "40", "42", "44"]} />
      <Filter title="Color" categories={["Amarillo", "Negro", "Verde", "Azul", "Blanco"]} />
    </div>
  );
}

export default Sidebar;