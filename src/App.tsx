import React, { FC } from 'react';
import ListaPokemon from './components/Lista/ListaPokemon';
import Filtro from './components/Filtro/Filtro';
//import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
export const link = createHttpLink({
  uri: "https://graphql-pokemon2.vercel.app/"
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
const App: FC = () => {
  return (
    <div>
      <ApolloProvider client={client}>


        <ListaPokemon />
        <Filtro />
      </ApolloProvider>
    </div>
  );
}

export default App;
