import { useQuery } from '@apollo/react-hooks';
import { QUERY_POKEMONS } from '../../graphql/query-pokemons';
import './ListaPokemon.css';
import Pokemon from './Pokemon';

interface Props {
  intervaloCP: number[];
  listaTipos: string[];
}

const ListaPokemon = (props: Props) => {
  const { data: { pokemons = [] } = {} } = useQuery(QUERY_POKEMONS, {
    variables: { first: 151 },
  });

  return (
    <div className="lista-pokemon">
      <h1 className="lista-titulo">Lista de Pokémons</h1>
      <p className="texto-total">Total visíveis: 69</p>
      {pokemons?.filter((pokemon: any) =>
      (pokemon.maxCP >= props.intervaloCP[0] && pokemon.maxCP <= props.intervaloCP[1] &&
        (props.listaTipos.includes(pokemon.types[0] || pokemon.types[1] || pokemon.types[2])))).map((pokemon: any) =>
          <Pokemon
            key={pokemon.id}
            __typename={pokemon.__typename}
            id={pokemon.id}
            image={pokemon.image}
            maxCP={pokemon.maxCP}
            name={pokemon.name}
            number={pokemon.number}
            types={pokemon.types}
          />

        )}
    </div>
  );
};

export default ListaPokemon;