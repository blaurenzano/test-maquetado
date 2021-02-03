import React, { useState } from 'react';
import './App.scss';
import shoesData from './../../../data/shoes.json';
import shoeImage from './../../../assets/products/zapatilla_1.jpg'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const List = () => {
  const [cols, setCols] = useState(4);

  return (
    <div>
      <div className="list-button-grid-web">
        <Button variant="contained" className="list-button" onClick={() => setCols(6)}>2 Columnas</Button>
        <Button variant="contained" className="list-button" onClick={() => setCols(4)}>3 Columnas</Button>
        <Button variant="contained" className="list-button" onClick={() => setCols(3)}>4 Columnas</Button>
      </div>
      <div className="list-button-grid-mobile">
        <Button variant="contained" className="list-button" onClick={() => setCols(12)}>1 Columna</Button>
        <Button variant="contained" className="list-button" onClick={() => setCols(6)}>2 Columnas</Button>
      </div>
      <Grid
        container
        spacing={2}
      >
        {shoesData.map((shoe, key) =>
          <Grid item xs={6} sm={cols} key={key}>
            <div className="list-item-container">
              <img src={shoeImage} />
              <p>{shoe.name} {shoe.model}</p>
              <strong>${shoe.price}</strong>
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default List;