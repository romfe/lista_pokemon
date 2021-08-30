import { useQuery } from '@apollo/react-hooks';
import { QUERY_POKEMONS } from '../../graphql/query-pokemons';
import './ListaPokemon.css';
import Pokemon from './Pokemon';
import { Container, Row } from 'react-bootstrap';


interface Props {
  intervaloCP: number[];
  listaTipos: string[];
}

interface Pokemon {
  id: string,
  number: string,
  name: string,
  types: string[],
  image: string,
  maxCP: number,
}
const ListaPokemon = (props: Props) => {
  const { data: { pokemons = [] } = {} } = useQuery(QUERY_POKEMONS, {
    variables: { first: 151 },
  });

  return (
    <div className="lista-pokemon">
      <Container fluid="md">
        <Row>
          <h1 className="lista-titulo">Lista de Pokémons</h1>
        </Row>
        <Row>
          <p className="texto-total">Total visíveis: {
            pokemons?.filter((pokemon: any) =>
            (pokemon.maxCP >= props.intervaloCP[0] && pokemon.maxCP <= props.intervaloCP[1] &&
              (props.listaTipos.includes(pokemon.types[0]) || props.listaTipos.includes(pokemon.types[1])))).length}
          </p>
        </Row>
      </Container>
      <Container className="lista-pokemon-view">
        {pokemons?.filter((pokemon: Pokemon) =>
        (pokemon.maxCP >= props.intervaloCP[0] && pokemon.maxCP <= props.intervaloCP[1] &&
          (props.listaTipos.includes(pokemon.types[0]) || props.listaTipos.includes(pokemon.types[1])))).map((pokemon: any) =>
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
      </Container>
    </div>
  );
};

export default ListaPokemon;