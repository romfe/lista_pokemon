import { FC } from 'react';
import './ListaPokemon.css';

interface Props {

}
//props:Props
const ListaPokemon: FC<Props> = () => {
  return (
    <div>
      <h1>Lista de Pokémons</h1>
      <p className="texto-total">Total visíveis: 69</p>
    </div>
  );
};

export default ListaPokemon;