import React from 'react';
import FiltroCP from './FiltroCP';
import ListaTipos from './ListaTipos';
import './Filtro.css';

const Filtro = () => {
  return (
    <div>
      <FiltroCP />
      <ListaTipos />
    </div>
  );
};

export default Filtro;