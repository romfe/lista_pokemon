import { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_POKEMONS } from '../../graphql/query-pokemons';
import './ListaPokemon.css';

interface Props {

}
//props:Props
const ListaPokemon: FC<Props> = () => {
  const { data: { pokemons = [] } = {} } = useQuery(QUERY_POKEMONS, {
    variables: { first: 9 },
  });
  return (
    <div>
      <h1>Lista de Pokémons</h1>
      <p className="texto-total">Total visíveis: 69</p>
      {pokemons && pokemons.map(pokemon: => JSON.stringify(pokemon))}
    </div>
  );
};

export default ListaPokemon;