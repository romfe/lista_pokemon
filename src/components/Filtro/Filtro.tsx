import { FC } from 'react';
import FiltroCP from './FiltroCP';
import ListaTipos from './ListaTipos';
import './Filtro.css';

const Filtro: FC = () => {
  return (
    <div>
      <FiltroCP />
      <ListaTipos />
    </div>
  );
};

export default Filtro;