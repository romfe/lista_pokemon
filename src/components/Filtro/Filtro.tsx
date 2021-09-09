import FiltroCP from '../FiltroCP/FiltroCP';
import ListaTipos from '../ListaTipos/ListaTipos';
import { Container, Row, Col } from 'react-bootstrap';
import { MainCard } from './styles';

const Filtro = () => {
  const { value, renderSlider } = FiltroCP();
  const { tiposSelecionados, renderListaTipos } = ListaTipos();
  return {
    value, tiposSelecionados, renderFiltro: (
      <MainCard>
      <div className="card-filtro">
        <Container>
          <Row>
            <h1 className="titulo-filtro">Filtro</h1>
          </Row>
          <Row>
            {renderSlider}
          </Row>
          <Row>
            <div className="div-intervalo">
              <div className="maxCP-min">
                {value[0]}
              </div>
              <div className="maxCP-max">
                {value[1]}
              </div>
              </div>
          </Row>
          <Row>
            <p className="types-label">Types</p>
          </Row>
          <Row>
            {renderListaTipos}
          </Row>
        </Container>
      </div>
      </MainCard>
    )
  };
};

export default Filtro;