import { FC } from 'react';
import ListaPokemon from './components/Lista/ListaPokemon';
import Filtro from './components/Filtro/Filtro';
import { GlobalStyle, MainCard } from './styles/global';
import { ApolloProvider } from "@apollo/react-hooks";//se der pau, trocar o apolloprovider pro import de baixo
import { createHttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

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
    <>
    <MainCard>
      <ApolloProvider client={client}>
        <Container fluid={true}>
          <Row>
            <Col xs={12} md={8}>
              <ListaPokemon intervaloCP={value} listaTipos={tiposSelecionados} />
            </Col>
            <Col xs={6} md={4} className="filtro-card">
              {renderFiltro}
            </Col>
          </Row>
        </Container>
      </ApolloProvider>
    </ MainCard>
    <GlobalStyle />
    </>
  );
}

export default App;
