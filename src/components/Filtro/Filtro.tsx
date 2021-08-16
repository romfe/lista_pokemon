import FiltroCP from './FiltroCP';
import ListaTipos from './ListaTipos';
import { Container, Row, Col } from 'react-bootstrap';
import './Filtro.css';

const Filtro = () => {
  const { value, renderSlider } = FiltroCP();
  const { tiposSelecionados, renderListaTipos } = ListaTipos();
  return {
    value, tiposSelecionados, renderFiltro: (
      <div className="card-filtro">
        <Container>
          <Row>
            <h1 className="titulo-filtro">Filtro</h1>
          </Row>
          <Row>
            {renderSlider}
          </Row>
          <Row>
            <Col sm={6}>
              <div className="maxCP">
                {value[0]}
              </div>
            </Col>
            <Col sm={6}>
              <div className="maxCP">
                {value[1]}
              </div>
            </Col>
          </Row>
          <Row>
            <p className="types-label">Types</p>
          </Row>
          <Row>
            {renderListaTipos}
          </Row>
        </Container>
      </div>
    )
  };
};

export default Filtro;