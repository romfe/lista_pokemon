import { FC } from 'react';
import ListaPokemon from './components/Lista/ListaPokemon';
import Filtro from './components/Filtro/Filtro';
import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
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
        <Container fluid={true}>
          <Row>
            <Col xs={12} md={8}>
              <ListaPokemon intervaloCP={value} listaTipos={tiposSelecionados} />
            </Col>
            <Col xs={6} md={4}>
              {renderFiltro}
            </Col>
          </Row>
        </Container>
      </ApolloProvider>
    </div>
  );
}

export default App;
