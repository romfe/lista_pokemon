import './Pokemon.css';
import { Container, Row, Col } from 'react-bootstrap';
interface Props {
  __typename: string,
  id: string,
  image: string,
  maxCP: number,
  name: string,
  number: string,
  types: string[],
};


const Pokemon = (props: Props) => {
  let classe: string;
  if (props.maxCP <= 500) {
    classe = "maxcp vermelho";
  } else if (props.maxCP > 500 && props.maxCP <= 1000) {
    classe = "maxcp roxo";
  } else if (props.maxCP > 1000 && props.maxCP <= 1500) {
    classe = "maxcp amarelo";
  } else {
    classe = "maxcp azul";
  }

  return (
    <div className="pokemon">
      <Container>
        <Row>
          <Col sm={4} xs={4}>
            <img src={props.image} alt={props.name} className="imagem-pokemon" />
          </Col>
          <Col sm={6} xs={6}>
            <div className="nome-pokemon">
              {props.name}
            </div>
            <div className="tipos-pokemon">
              {props.types.join(", ")}
            </div>
            <div className={classe}>
              <p className="maxcp-text">{props.maxCP}</p>
            </div>
          </Col>
          <Col sm={2} xs={2}>
            <div className="numero-pokemon">
              {props.number}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Pokemon;