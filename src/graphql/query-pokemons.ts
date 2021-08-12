import gql from 'graphql-tag';

export const QUERY_POKEMONS = gql`
  query pokemons($first = Int!){
    pokemons(first: $first){
      id
      number
      name
      image
      maxCP
      type
    }
  }
`
