import React, { FC } from 'react';
import ListaPokemon from './components/Lista/ListaPokemon';
import Filtro from './components/Filtro/Filtro';
import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import './App.css';

export const link = createHttpLink({
  uri: "https://graphql-pokemon2.vercel.app/"
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
const App: FC = () => {
  const { value, tiposSelecionados, renderFiltro } = Filtro();
  return (
    <div className="app-style">
      <ApolloProvider client={client}>
        <ListaPokemon intervaloCP={value} listaTipos={tiposSelecionados} />
        {renderFiltro}

      </ApolloProvider>
    </div>
  );
}

export default App;
