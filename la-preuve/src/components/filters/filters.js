import React from 'react'
import './filters.css'

function Filters(){
    return(
        <section className="filters">
          <h2 className="filters__title">Zapatillas</h2>
          <p className="filters__subtitle">Filtrar</p>
          <div className="filters__filter-box">
            <h3>Categoría</h3>
            <span>Zapatillas</span>
            <span>Zapatos</span>
            <span>Botas</span>
            <span>Sandalias</span>
            <span>Pantuflas</span>
          </div>
          <div className="filters__filter-box">
            <h3>Talle</h3>
            <span>36</span>
            <span>38</span>
            <span>40</span>
            <span>42</span>
            <span>44</span>
          </div>
          <div className="filters__filter-box">
            <h3>Color</h3>
            <span>Amarillo</span>
            <span>Negro</span>
            <span>Verde</span>
            <span>Azul</span>
            <span>Blanco</span>
          </div>
        </section>
    )
}

export default Filters