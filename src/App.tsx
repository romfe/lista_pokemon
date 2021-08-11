import React, { FC } from 'react';
import ListaPokemon from './components/Lista/ListaPokemon';
import Filtro from './components/Filtro/Filtro';

const App: FC = () => {
  return (
    <div>
      <ListaPokemon />
      <Filtro />
    </div>
  );
}

export default App;
